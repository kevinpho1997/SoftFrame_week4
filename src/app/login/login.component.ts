import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dummyData = {
    "users": [
        {"userName": "kevin", "passWord": "123"},
        {"userName": "cat", "passWord": "meow"},
        {"userName": "dog", "passWord": "woof"}
    ]
  };

  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  loginClicked(){
    alert("form submitted");
  }
}


