import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  wasValidated = false;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password:new FormControl(null,Validators.required)
})
   }

  ngOnInit(): void {

  }

  submit(){
    this.wasValidated = true;
    console.log(this.loginForm.getRawValue(),'::value::');
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
