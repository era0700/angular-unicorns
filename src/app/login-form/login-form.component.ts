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
  currentuser:any;

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
    ) 
    {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
})
   }

  ngOnInit(): void {}

  submit(){
    if(this.loginForm.valid) {
      this.wasValidated = true;
    }
    if (this.loginForm.invalid) return;
    this.disableButton = true;
    const user = this.loginForm.getRawValue();
    
    this.authService
    .signin(user.email, user.password)
    .then((userCredential) => { 
      user.uid = userCredential.user?.uid;
      this.router.navigateByUrl('/create-post');
    })
    .catch((error) => {
      //
      this.disableButton = false;
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  
  
  }

}
