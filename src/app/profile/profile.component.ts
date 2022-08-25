import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = sessionStorage.getItem('username');
  // not sure if this should be here
  password = sessionStorage.getItem('password');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');


  constructor() { }

  ngOnInit(): void {
  }

  loginfunc(){

  }

}
