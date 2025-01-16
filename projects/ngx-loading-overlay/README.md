# ngx-loading-overlay

An Angular directive adding a loading overlay to your HTML.

![example image](https://raw.githubusercontent.com/shaman-apprentice/ngx-loading-overlay/refs/tags/v1.0.0/docs/example.png)

See [demo app](https://github.com/shaman-apprentice/ngx-loading-overlay/tree/main/projects/demo/src/app) for full example.

## How to use

```bash
npm install @shaman-apprentice/ngx-loading-overlay
```

```ts
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideNgxLoadingOverlay } from '@shaman-apprentice/ngx-loading-overlay';
import { LoadingOverlayComponent } from './components/loadingOverlay.component';

export const appConfig: ApplicationConfig = {
  providers: [
    // Note, that `LoadingOverlayComponent` must adhere to
    // type NgxLoadingOverlay = { 
    //   elemRef: ElementRef<HTMLElement>;
    //   onActivate?: () => void;
    //   onDeactivate?: () => void;
    // }
    provideNgxLoadingOverlay(LoadingOverlayComponent),
  ],
};
``` 

```ts
// app.component.ts
import { Component, signal } from '@angular/core';
import { IsLoadingDirective } from "@shaman-apprentice/ngx-loading-overlay";

@Component({
  selector: 'app-root',
  imports: [ IsLoadingDirective ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected isLoading = signal(false);
}
```

```html
<!-- app.component.html -->
<button (click)="isLoading.set(!isLoading())">Toggle loading</button>
<div [ngxIsLoading]="isLoading()">
  <p>Lorem ipsum dolor...</p>
</div>
```
