import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../class/users';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // week 4
  dummyData = {
    "users": [
        {"userName": "kevin", "passWord": "123"},
        {"userName": "cat", "passWord": "meow"},
        {"userName": "dog", "passWord": "woof"}
    ]
  };

  username: string = "";
  password: string = "";

  // week 5
  // make a loop and assign values to userpwd and userobj, maybe do this in loginfunc()?
  

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {this.username = params.get('username')!;} 
    );
    this.route.paramMap.subscribe(
      params => {this.password = params.get('password')!;} 
    );
  }

  // public loginfunc() {
  //   this.httpClient.post(BACKEND_URL + '/login', this.userpwd, httpOptions)
  //     .subscribe((data: any) => {
  //       alert(JSON.stringify(this.userpwd));
  //       if (data.valid) {
  //         sessionStorage.setItem('birthday', this.userobj.birthday);
  //         sessionStorage.setItem('age', this.userobj.age.toString());
  //         sessionStorage.setItem('email', this.userobj.email);
  //         this.httpClient.post<User[]>(BACKEND_URL + '/loginafter', this.userobj, httpOptions)
  //           .subscribe((m: any) => {console.log(m[0]);});
  //         this.router.navigateByUrl('account');
  //       } else {
  //         alert('Incorrect credentials');
  //       }
  //     });
  // }

  loginClicked(){
    // alert("form submitted");
    var authenticated = false;
    console.log(this.username);
    console.log(this.password);

    for(var i=0; i<this.dummyData.users.length; i++){
      var jsonData = this.dummyData.users;
      if (jsonData[i]["userName"] == this.username && jsonData[i]["passWord"] == this.password){
          console.log("Match found");
          authenticated = true;
      } 
    }
    if (authenticated == true) {
      this.router.navigateByUrl('/account');
    } else if (authenticated == false) {
      alert("Incorrect username or password");
    }
  }
}


