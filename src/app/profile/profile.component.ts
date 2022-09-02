import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { User } from '../class/users';
import { HttpClient } from '@angular/common/http';
import { GetuserService } from '../services/getuser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // currentUserString = sessionStorage.getItem("currentUser");
  // currentUser = JSON.parse(this.currentUserString);
  username: string = "";
  birthday: string = "";
  age: number = 0;
  email: string = "";
  password: string = "";

  updatedUsername: string = "";
  updatedBirthday: string = "";
  updatedAge: number = 0;
  updatedEmail: string = "";

  public currentUserStr: string = "";
  public currentUser: User = new User();
  public updatedUser: User = new User();

  constructor(private getUserService: GetuserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
    // this.getUserService.observeUser().subscribe((data: any) => {
    //   this.currentUserStr = data;
    //   console.log("current user:", data);
    // })
  }

  private getCurrentUser() {
    this.currentUser = JSON.parse(this.getUserService.getCurrentUser() || '{}');
    // this.currentUser = JSON.parse(this.currentUserStr);
    console.log(this.currentUser);
  }


  public updateUser(event: any) {
    event.preventDefault();
    // if you don't want to force users to fill out every field you cou
    // if (this.username) {
    //   this.updatedUsername = this.username
    // } else
    this.updatedUsername = (this.username ? this.username : this.currentUser.username);
    this.updatedBirthday = (this.birthday ? this.birthday : this.currentUser.birthday);
    this.updatedAge = (this.age ? this.age : this.currentUser.age);
    this.updatedEmail = (this.email ? this.email : this.currentUser.email);
    
    this.updatedUser = new User(this.updatedUsername, this.birthday, this.age, this.email)
    console.log(this.updatedUser);
    sessionStorage.setItem('currentUser', JSON.stringify(this.updatedUser));


    // sessionStorage.setItem('username', this.currentUser.username);
    // using getUser service for simplicity, this should be somewhere else probably or rename
    // the service to something that makes more sense


  }

}
