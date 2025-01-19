import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-loading-indicator",
  template: `<div class="loader"></div>`,
  styles: `
    app-loading-indicator {
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: #FF3D00;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingIndicatorComponent {
  elemRef = inject(ElementRef);
}
