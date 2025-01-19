import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNgxLoadingIndicator } from '@shaman-apprentice/ngx-loading-overlay';
import { LoadingIndicatorComponent } from './components/loadingIndicator.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNgxLoadingIndicator(LoadingIndicatorComponent),
  ],
};
