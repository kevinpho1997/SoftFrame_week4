import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../class/users';
import { GetuserService } from '../services/getuser.service';

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
  username: string = "";
  birthday: string = "";
  age: number = 0;
  email: string = "";
  password: string = "";
  newUser: User = new User();

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  public loginClicked(event: any) {
    event.preventDefault();
    this.authservice.loginEvent(this.username, this.password).subscribe(
      data=>{
        if (data.valid == true) {
          console.log(data);
          this.newUser = new User(data.username, data.birthday, data.age, data.email);
          sessionStorage.setItem('currentUser', JSON.stringify(this.newUser));
          // 
          this.authservice.login();
          this.router.navigate(['/account']);
        } else {
          alert("Login credentials are incorrect");
        }
      }
    )
  }  

  // loginClicked(){
  //   // alert("form submitted");
  //   var authenticated = false;
  //   console.log(this.username);
  //   console.log(this.password);

  //   for(var i=0; i<this.dummyData.users.length; i++){
  //     var jsonData = this.dummyData.users;
  //     if (jsonData[i]["userName"] == this.username && jsonData[i]["passWord"] == this.password){
  //         console.log("Match found");
  //         authenticated = true;
  //     } 
  //   }
  //   if (authenticated == true) {
  //     this.router.navigateByUrl('/account');
  //   } else if (authenticated == false) {
  //     alert("Incorrect username or password");
  //   }
  // }
}


