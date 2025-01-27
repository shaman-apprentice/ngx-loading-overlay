import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from "@angular/core";
import { IsLoadingDirective } from "@shaman-apprentice/ngx-loading-overlay";

@Component({
  selector: "app-basic-example",
  templateUrl: "basicExample.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IsLoadingDirective,
  ]
})
export class BasicExampleComponent {
  protected isLoading = signal(false);
}
