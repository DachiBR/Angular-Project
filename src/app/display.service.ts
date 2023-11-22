import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  displayUsers(users: any[]): void {
    // Display users in the console
    console.log('Array is displayed by Display service:', users);
  }
}
