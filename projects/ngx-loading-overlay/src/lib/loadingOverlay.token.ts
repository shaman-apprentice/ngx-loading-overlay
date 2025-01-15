import { Type, InjectionToken, ElementRef } from '@angular/core';

export type NgxLoadingOverlay = {
  elemRef: ElementRef<HTMLElement>;
} 

export const NgxLoadingOverlayToken = new InjectionToken<Type<NgxLoadingOverlay>>("NgxLoadingOverlayToken");

export function provideNgxLoadingOverlay(component: Type<NgxLoadingOverlay>) {
  return {
    provide: NgxLoadingOverlayToken,
    useValue: component,
  };
}
