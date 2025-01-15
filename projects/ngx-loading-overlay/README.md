# ngx-loading-overlay

An Angular directive adding a loading overlay to your HTML.

TODO
![example image](https://raw.githubusercontent.com/shaman-apprentice/ngx-loading-overlay/refs/tags/v0.1.0/docs/demo.excalidraw.png)

## How to use

```bash
npm install @shaman-apprentice/ngx-loading-overlay
```

See [demo app](https://github.com/shaman-apprentice/ngx-loading-overlay/tree/main/projects/demo/src/app) for full example.

```ts
// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNgxLoadingOverlay } from '@shaman-apprentice/ngx-loading-overlay';
import { LoadingOverlayComponent } from './components/loadingOverlay.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
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
