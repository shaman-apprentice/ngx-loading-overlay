import { ChangeDetectionStrategy, Component, model, OnDestroy, OnInit, signal, ViewEncapsulation } from "@angular/core";
import { IsLoadingDirective } from "@shaman-apprentice/ngx-loading-overlay";

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Illo corporis quam minus id illum dolore non! Possimus
est provident pariatur quam tempora dignissimos ab consectetur
nostrum, quas expedita earum enim.`;

@Component({
  selector: "app-dynamic-height-example",
  templateUrl: "dynamicHeightExample.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IsLoadingDirective
  ],
})
export class DynamicHeightExampleComponent implements OnInit, OnDestroy {
  isLoading = model.required<boolean>();

  protected dynamicContent = signal(lorem);

  private counter = 1;
  private intervalTracker?: ReturnType<typeof setInterval> ;

  ngOnInit(): void {
    this.intervalTracker = setInterval(() => {
      const dynamicContent = this.counter++ % 2 === 0
        ? (lorem + " ").repeat(3)
        : lorem;
      this.dynamicContent.set(dynamicContent);
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalTracker);
  }
}
