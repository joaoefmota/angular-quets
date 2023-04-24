import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SignUpComponent {

  isAdmin: boolean = false

  viewAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
