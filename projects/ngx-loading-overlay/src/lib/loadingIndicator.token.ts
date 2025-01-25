import { Type, InjectionToken } from '@angular/core';

export type INgxLoadingIndicator = {
  onActivate?: () => void;
  onDeactivate?: () => void;
} 

export const NgxLoadingIndicatorToken = new InjectionToken<Type<INgxLoadingIndicator>>("NgxLoadingIndicatorToken");

/**
 * Provides a component, which will be displayed positioned absolute centered
 * on top of semi-transparent loading overlay
 */
export function provideNgxLoadingIndicator(Component: Type<INgxLoadingIndicator>) {
  return {
    provide: NgxLoadingIndicatorToken,
    useValue: Component,
  };
}
