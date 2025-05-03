import { Component, input, model } from "@angular/core";
import {render, screen, fireEvent, aliasedInput} from '@testing-library/angular';

@Component({
  selector: 'app-counter',
  template: `
    <span>{{ hello() }}</span>
    <button (click)="decrement()">-</button>
    <span>Current Count: {{ counter() }}</span>
    <button (click)="increment()">+</button>
  `,
})
export class CounterComponent {
  counter = model(0)
  hello = input('Hi', {alias: 'greeting'})

  increment() {
    this.counter.set(this.counter() + 1)
  }

  decrement() {
    this.counter.set(this.counter() - 1)
  }
}


describe('Counter', () => {
  it('should render counter', async () => {
    await render(CounterComponent, {
      inputs: {
        counter: 5,
        // aliases need to be specified using aliasedInput
        ...aliasedInput('greeting', 'Hello Alias!'),
      },
    })

    expect(screen.getByText('Current Count: 5')).toBeVisible()
    expect(screen.getByText('Hello Alias!')).toBeVisible()
  })

  it('should increment the counter on click', async () => {
    await render(CounterComponent, {inputs: {counter: 5}})

    const incrementButton = screen.getByRole('button', {name: '+'})
    fireEvent.click(incrementButton)

    expect(screen.getByText('Current Count: 6')).toBeVisible()
  })
})