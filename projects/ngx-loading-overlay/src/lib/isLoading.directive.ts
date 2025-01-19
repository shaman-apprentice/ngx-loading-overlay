import { afterNextRender, ComponentRef, DestroyRef, Directive, effect, ElementRef, inject, input, ViewContainerRef } from "@angular/core";
import { NgxLoadingIndicator, NgxLoadingIndicatorToken } from "./loadingIndicator.token";

@Directive({
  selector: "[ngxIsLoading]",
})
export class IsLoadingDirective {
  ngxIsLoading = input.required<boolean>();

  private elemRef: ElementRef<HTMLElement> = inject(ElementRef);
  private elemRefOriginOverflowProp?: string;
  private viewContainerRef = inject(ViewContainerRef);
  private destroyRef = inject(DestroyRef);
  private LoadingIndicatorComponent = inject(NgxLoadingIndicatorToken);
  
  private _loadingIndicatorRef?: ComponentRef<NgxLoadingIndicator>;
  private _loadingOverlayElem?: HTMLElement;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this._loadingIndicatorRef?.destroy();
    });

    afterNextRender(() => {
      this.elemRef.nativeElement.style.position = "relative";
    });

    effect(() => {
      if (this.ngxIsLoading()) this.activate();
      else this.deactivate();
    });
  }

  private activate() {
    this.elemRef.nativeElement.setAttribute("inert", "");
    this.elemRefOriginOverflowProp = this.elemRef.nativeElement.style.overflow;
    this.elemRef.nativeElement.style.overflow = "hidden";

    this.loadingOverlayElem.style.removeProperty("display");
    this.loadingOverlayElem.style.height = this.elemRef.nativeElement.clientHeight + "px";
    this.loadingOverlayElem.style.top = this.elemRef.nativeElement.scrollTop + "px";
    this.loadingOverlayElem.style.width = this.elemRef.nativeElement.clientWidth + "px";
    this.loadingOverlayElem.style.left = this.elemRef.nativeElement.scrollLeft + "px";

    this.loadingIndicatorElem.style.removeProperty("display");
    const centeredTop = this.elemRef.nativeElement.clientHeight / 2 + this.elemRef.nativeElement.scrollTop;
    const centeredLeft = this.elemRef.nativeElement.clientWidth / 2 + this.elemRef.nativeElement.scrollLeft;
    this.loadingIndicatorElem.style.top = `${centeredTop}px`;
    this.loadingIndicatorElem.style.left = `${centeredLeft}px`;

    this.loadingIndicatorRef.instance.onActivate?.();
  }

  private deactivate() {
    if (this._loadingIndicatorRef === undefined) // was never activated, so just do nothing
      return;

    this.elemRef.nativeElement.removeAttribute("inert");
    if (this.elemRefOriginOverflowProp)
      this.elemRef.nativeElement.style.overflow = this.elemRefOriginOverflowProp;

    this.loadingIndicatorElem.style.display = "none";
    this.loadingOverlayElem.style.display = "none";

    this.loadingIndicatorRef.instance.onDeactivate?.();
  }

  private get loadingIndicatorRef(): ComponentRef<NgxLoadingIndicator>  {
    if (this._loadingIndicatorRef === undefined)
      this._loadingIndicatorRef = this.insertLoadingIndicatorCompRef();

    return this._loadingIndicatorRef;
  }

  private get loadingIndicatorElem(): HTMLElement {
    return this.loadingIndicatorRef.instance.elemRef.nativeElement;
  }

  private get loadingOverlayElem(): HTMLElement {
    if (!this._loadingOverlayElem) 
      this._loadingOverlayElem = this.insertLoadingOverlay();

    return this._loadingOverlayElem;
  }

  private insertLoadingOverlay(): HTMLElement {
    const overlay = document.createElement("section");
    overlay.className = "ngx-loading-overlay";
    overlay.style.position = "absolute";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.33)"
  
    this.elemRef.nativeElement.appendChild(overlay);

    return overlay;
  }
  
  private insertLoadingIndicatorCompRef():  ComponentRef<NgxLoadingIndicator> {
    const loadingIndicatorRef = this.viewContainerRef.createComponent(this.LoadingIndicatorComponent);

    const elem = loadingIndicatorRef.instance.elemRef.nativeElement;
    elem.style.position = "absolute";
    elem.style.transform = "translate(-50%, -50%)";
    this.elemRef.nativeElement.appendChild(elem);

    return loadingIndicatorRef;
  }
}
