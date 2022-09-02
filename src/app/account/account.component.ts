import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { User } from '../class/users';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public userDetails: User = new User()

  constructor() { }

  ngOnInit(): void {
    this.loadUserInfo();
    
  }

  private loadUserInfo() {
    this.userDetails = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    console.log(this.userDetails);
  }

}
