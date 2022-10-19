import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  wasValidated = false;
  disableButton = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      fullName: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    this.wasValidated = true;
    if (this.registerForm.invalid) return;
    this.disableButton = true;
    const user = this.registerForm.getRawValue();

    this.authService
    .signup(user.email, user.password)
    .then((userCredential) => {
      delete user.password; 
      user.uid = userCredential.user?.uid;

      this.firestoreService.storeUser(user)
      .then(() => {
        this.router.navigate(['login']);
      })
    })
    .catch((error) => {
      //
      this.disableButton = false;
    })
  
  }
}
