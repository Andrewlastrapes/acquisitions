import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginError: boolean=false;
  errMessage: string
  username: string
  password: string

  constructor(
    private router: Router
  ) { }

  loginUser(u, p){
    if(!u || !p){
      this.loginError = true
      this.errMessage = "Please enter your username and password";
      return;
    } else {
      this.router.navigate(["dashboard"], {queryParams: {username: this.username}})
    }

  }

  ngOnInit() {
  }

}
