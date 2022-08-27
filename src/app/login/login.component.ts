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

  username: string = "";
  birthday: string = "";
  age: number = 0;
  email: string = "";
  password: string = "";
  errorAlert = "";
  newUser: User = new User();

  // week 5
  // make a loop and assign values to userpwd and userobj, maybe do this in loginfunc()?
  

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient, private authservice: AuthService) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(
    //   params => {this.username = params.get('username')!;} 
    // );
    // this.route.paramMap.subscribe(
    //   params => {this.password = params.get('password')!;} 
    // );
  }

  public loginClicked(event: any) {
    event.preventDefault();
    this.authservice.loginEvent(this.username, this.password).subscribe(
      data=>{
        if (data.valid == true) {
          this.newUser = new User(data.username, data.birthday, data.age, data.email, data.password)
          sessionStorage.setItem('currentUser', JSON.stringify(this.newUser));
          this.router.navigate(['/account']);
        } else {
          this.errorAlert = "Login credentials are incorrect";
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


