import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {this.username = params.get('username')!;} 
    );
    this.route.paramMap.subscribe(
      params => {this.password = params.get('password')!;} 
    );
  }

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


