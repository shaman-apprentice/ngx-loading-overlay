import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { IsLoadingDirective } from "@shaman-apprentice/ngx-loading-overlay";
import { DynamicHeightExampleComponent } from './components/dynamicHeightExample/dynamicHeightExample.component';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IsLoadingDirective,
    DynamicHeightExampleComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected isLoading = signal(false);
}
