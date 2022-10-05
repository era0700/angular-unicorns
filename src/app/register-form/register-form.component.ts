import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  wasValidated = false;

  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      fullname:new FormControl(null,Validators.required)
})
   }

  ngOnInit(): void {

  }

  submit(){
    this.wasValidated = true;
    console.log(this.registerForm.getRawValue(),'::value::');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}