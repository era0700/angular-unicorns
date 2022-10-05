import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const LoginForm= new FormGroup({
      name: new FormControl(LoginFormComponent, [
        Validators.required,
        Validators.minLength(4)
      ]),
    
    });
  }

}
