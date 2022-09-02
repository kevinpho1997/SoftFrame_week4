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
  public currentUserStr: string = "";
  public currentUser: User = new User();

  username: string = "";
  birthday: string = "";
  age: number = 0;
  email: string = "";

  constructor(private getUserService: GetuserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
    // this.getUserService.observeUser().subscribe((data: any) => {
    //   this.currentUserStr = data;
    //   console.log("current user:", data);
    // })
  }

  public getCurrentUser() {
    this.currentUser = JSON.parse(this.getUserService.getCurrentUser() || '{}');
    // this.currentUser = JSON.parse(this.currentUserStr);
    console.log(this.currentUser);
  }

}
