import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-login',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
  ],
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
      console.log("hey")
      this.router.navigate(["dashboard"], {queryParams: {username: this.username}})
    }

  }

  ngOnInit() {
  }

}
