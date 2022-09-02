import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';
  ifUserLoggedIn = this.authservice.isLoggedIn;
  constructor(private router: Router, private authservice: AuthService) { }

  logoutClicked() {
    sessionStorage.clear();
    this.authservice.isLoggedIn = false;
    // this.ifUserLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
