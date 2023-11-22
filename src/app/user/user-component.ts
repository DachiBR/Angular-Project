
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from './child-user.interface';
import { DisplayService } from '../display.service';
import { ParentUser } from './parent-user.interface';

@Component({
  selector: 'app-user',
  template: `
    <h1>{{ message }}</h1>
    <div *ngFor="let user of childUsers">
      {{ user.Id }} - {{ user.Firstname }} {{ user.Lastname }}
    </div>
    <button (click)="passData()">Pass Data</button>
    <button (click)="displayUsers()">Display Users</button>
  `,
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];
  @Output() dataPassed = new EventEmitter<ChildUser[]>();
  message = 'Array from parent component';

  childUsers: ChildUser[] = [
    { Id: 101, Firstname: 'John', Lastname: 'Smith', DateOfBirth: new Date('1990-05-17'), PhoneNumber: '5551112233', Email: 'alice@example.com' },
    { Id: 102, Firstname: 'Dachi', Lastname: 'Bregadze', DateOfBirth: new Date('20003-10-28'), PhoneNumber: '555405905', Email: 'd.bregadze028@gmail.com' },
    { Id: 103, Firstname: 'Tatia', Lastname: 'Gujejiani', DateOfBirth: new Date('2004-12-19'), PhoneNumber: '555000340', Email: 'tatia@example.com' },
    { Id: 104, Firstname: 'Giorgi', Lastname: 'Abesadze', DateOfBirth: new Date('2004-06-12'), PhoneNumber: '555000521', Email: 'Giorgi@example.com' },  
    { Id: 105, Firstname: 'Nika', Lastname: 'Jonson', DateOfBirth: new Date('2001-02-18'), PhoneNumber: '55500123', Email: 'Nika@example.com' },
  ];

  constructor(private displayService: DisplayService) {}

  passData() {
    this.dataPassed.emit(this.childUsers);
  }

  displayUsers() {
    this.displayService.displayUsers(this.childUsers);
  }
}