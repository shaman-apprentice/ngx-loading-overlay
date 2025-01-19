import { Type, InjectionToken, ElementRef } from '@angular/core';

export type NgxLoadingIndicator = {
  elemRef: ElementRef<HTMLElement>;
  onActivate?: () => void;
  onDeactivate?: () => void;
} 

export const NgxLoadingIndicatorToken = new InjectionToken<Type<NgxLoadingIndicator>>("NgxLoadingIndicatorToken");

/**
 * Provides a component, which will be displayed positioned absolute centered
 * on top of semi-transparent loading overlay
 */
export function provideNgxLoadingIndicator(Component: Type<NgxLoadingIndicator>) {
  return {
    provide: NgxLoadingIndicatorToken,
    useValue: Component,
  };
}
