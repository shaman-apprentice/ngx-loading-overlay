import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from "@angular/core";
import { IsLoadingDirective } from "@shaman-apprentice/ngx-loading-overlay";

@Component({
  selector: "app-with-scroll-example",
  templateUrl: "withScrollExample.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IsLoadingDirective,
  ]
})
export class WithScrollExampleComponent {
  protected isLoading = signal(false);
}
