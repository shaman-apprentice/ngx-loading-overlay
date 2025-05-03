import { Component, signal } from "@angular/core";
import {render, screen, fireEvent} from '@testing-library/angular';
import { IsLoadingDirective } from "./isLoading.directive";
import { provideNgxLoadingIndicator } from "./loadingIndicator.token";

@Component({
  selector: "app-loading-indicator",
  template: "loading",
})
class LoadingIndicatorComponent {}

@Component({
  selector: 'app-test',
  template: `
    <button (click)="isLoading.set(!isLoading())">Toggle loading</button>
    <div [ngxIsLoading]="isLoading()">Container</div>
  `,
  imports: [ IsLoadingDirective ],
  providers: [ provideNgxLoadingIndicator(LoadingIndicatorComponent), ]
})
class TestComponent {
  isLoading = signal(false);
}


describe('isLoading.directive', () => {
  it('activate and deactivate the loading indicator', async () => {
    await render(TestComponent);
    const toggleIsLoadingButton = screen.getByRole('button', { name: 'Toggle loading' });

    fireEvent.click(toggleIsLoadingButton);
    expect(screen.getByText('loading')).toBeVisible();

    fireEvent.click(toggleIsLoadingButton);
    expect(screen.getByText('loading')).not.toBeVisible();
  });
});
