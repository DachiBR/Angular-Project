import { Component, Input } from '@angular/core';
import { ParentUser } from './parent-user.interface';

@Component({
  selector: 'app-user',
  template: `
    <h1>{{ message }}</h1>
    <div *ngFor="let user of parentUsers">
      {{ user.Id }} - {{ user.Firstname }} {{ user.Lastname }}
    </div>
  `,
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];
  message = 'Array from parent component';
}
