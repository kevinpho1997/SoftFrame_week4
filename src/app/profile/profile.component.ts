import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../class/users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // currentUserString = sessionStorage.getItem("currentUser");
  // currentUser = JSON.parse(this.currentUserString) as User;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getCurrentUser() {
    
  }

}
