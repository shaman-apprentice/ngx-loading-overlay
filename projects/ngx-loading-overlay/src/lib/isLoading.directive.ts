import { afterNextRender, ComponentRef, DestroyRef, Directive, effect, ElementRef, inject, input, ViewContainerRef } from "@angular/core";
import { NgxLoadingOverlay, NgxLoadingOverlayToken } from "./loadingOverlay.token";

@Directive({
  selector: "[ngxIsLoading]",
})
export class IsLoadingDirective {
  ngxIsLoading = input.required<boolean>();
  /**
   * If true, which is default, it will set `inert` attribute on applied HTMLElement.
   * This prevents interacting with anything under the loading screen,
   * like tabbing and pressing buttons.
   */
  ngxSetInertWhenLoading = input(true);

  private elemRef: ElementRef<HTMLElement> = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);
  private destroyRef = inject(DestroyRef);
  private LoadingOverlay = inject(NgxLoadingOverlayToken);

  private loadingOverlayRef?: ComponentRef<NgxLoadingOverlay>;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.loadingOverlayRef?.destroy();
    });

    afterNextRender(() => {
      this.elemRef.nativeElement.style.position = "relative";
    });

    effect(() => {
      const isLoading = this.ngxIsLoading();
      const setInertWhenLoading = this.ngxSetInertWhenLoading(); 

      if (!isLoading) {
        if (this.loadingOverlayRef === undefined)
          return;

        this.getLoadingOverlay().style.display = "none";
        this.elemRef.nativeElement.removeAttribute("inert");

        this.loadingOverlayRef.instance.onDeactivate?.();
      } else {
        this.getLoadingOverlay().style.removeProperty("display");
        if (setInertWhenLoading)
          this.elemRef.nativeElement.setAttribute("inert", "");

        this.loadingOverlayRef!.instance.onActivate?.();
      }
    });
  }

  private getLoadingOverlay(): HTMLElement {
    if (this.loadingOverlayRef === undefined) {
      this.loadingOverlayRef = this.viewContainerRef.createComponent(this.LoadingOverlay);
      this.elemRef.nativeElement.appendChild(this.loadingOverlayRef.instance.elemRef.nativeElement);
      this.getLoadingOverlay().style.position = "absolute";
      this.getLoadingOverlay().style.inset = "0";
    }

    return this.loadingOverlayRef.instance.elemRef.nativeElement;
  }
}
