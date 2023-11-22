import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user-interface'; 


@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input type="text" class="form-control" formControlName="firstname">
        <div *ngIf="userForm.get('firstname').hasError('required')" class="text-danger">First Name is required</div>
        <div *ngIf="userForm.get('firstname').hasError('minlength')" class="text-danger">First Name must be at least 3 characters</div>
      </div>

      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" class="form-control" formControlName="lastname">
        <div *ngIf="userForm.get('lastname').hasError('required')" class="text-danger">Last Name is required</div>
        <div *ngIf="userForm.get('lastname').hasError('minlength')" class="text-danger">Last Name must be at least 3 characters</div>
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number</label>
        <input type="text" class="form-control" formControlName="phoneNumber">
        <div *ngIf="userForm.get('phoneNumber').hasError('required')" class="text-danger">Phone Number is required</div>
        <div *ngIf="userForm.get('phoneNumber').hasError('minlength')" class="text-danger">Phone Number must be at least 9 characters</div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" formControlName="email">
        <div *ngIf="userForm.get('email').hasError('required')" class="text-danger">Email is required</div>
        <div *ngIf="userForm.get('email').hasError('minlength')" class="text-danger">Email must be at least 8 characters</div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = {
        Id: 1, // You can set an appropriate value for Id
        Firstname: this.userForm.value.firstname,
        Lastname: this.userForm.value.lastname,
        DateOfBirth: new Date(), // You can set an appropriate value for DateOfBirth
        PhoneNumber: this.userForm.value.phoneNumber,
        Email: this.userForm.value.email,
      };

      // Do something with the user object, for example, add it to an array or send it to a service.
      console.log(user);
    } else {
      // Handle form validation errors
    }
  }
}
