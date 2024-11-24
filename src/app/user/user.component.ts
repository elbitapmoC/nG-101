import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() drink: string = '';
  @Input() food: string = '';
  @Input() name: string = '';

  @Output() drinks = new EventEmitter<number>();

  count: number = 0;

  addDrink() {
    this.count++;
    this.drinks.emit(this.count);
  }
}
