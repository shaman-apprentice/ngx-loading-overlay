import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DynamicHeightExampleComponent } from './components/dynamicHeightExample/dynamicHeightExample.component';
import { BasicExampleComponent } from './components/basicExample/basicExample.component';
import { WithScrollExampleComponent } from './components/withScrollExample/withScrollExample.component';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BasicExampleComponent,
    WithScrollExampleComponent,
    DynamicHeightExampleComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }
