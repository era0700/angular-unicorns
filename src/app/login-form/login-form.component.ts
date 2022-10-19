import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  wasValidated = false;
  disableButton = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password:new FormControl(null,Validators.required)
})
   }

  ngOnInit(): void {

  }

  submit(){
    this.wasValidated = true;
    if (this.loginForm.invalid) return;
    this.disableButton = true;
    const user = this.loginForm.getRawValue();

    this.authService
    .signin(user.email, user.password)

  }
  

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
