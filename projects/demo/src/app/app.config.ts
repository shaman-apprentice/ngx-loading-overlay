import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNgxLoadingOverlay } from '@shaman-apprentice/ngx-loading-overlay';
import { LoadingOverlayComponent } from './components/loadingOverlay.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNgxLoadingOverlay(LoadingOverlayComponent),
  ],
};
