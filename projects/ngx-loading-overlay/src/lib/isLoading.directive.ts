import { afterNextRender, ComponentRef, DestroyRef, Directive, effect, ElementRef, inject, input, ViewContainerRef } from "@angular/core";
import { NgxLoadingOverlay, NgxLoadingOverlayToken } from "./loadingOverlay.token";

@Directive({
  selector: "[ngxIsLoading]",
  standalone: true,
})
export class IsLoadingDirective {
  ngxIsLoading = input.required<boolean>();

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

      if (!isLoading) {
        if (this.loadingOverlayRef === undefined)
          return;

        this.getLoadingOverlayHtmlElem().style.display = "none";

      } else {
        this.getLoadingOverlayHtmlElem().style.removeProperty("display");
      }
    });
  }

  private getLoadingOverlayHtmlElem(): HTMLElement {
    if (this.loadingOverlayRef === undefined) {
      this.loadingOverlayRef = this.viewContainerRef.createComponent(this.LoadingOverlay);
      this.elemRef.nativeElement.appendChild(this.getLoadingOverlayHtmlElem());
      this.getLoadingOverlayHtmlElem().style.position = "absolute";
      this.getLoadingOverlayHtmlElem().style.inset = "0";
    }

    return this.loadingOverlayRef.instance.elemRef.nativeElement;
  }
}
