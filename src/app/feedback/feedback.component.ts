import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  wasValidated = false;
  disableButton = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService,
    private router: Router
   
  ) { 
    this.feedbackForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      fullName: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  
  submit() {
    this.wasValidated = true;
    if (this.feedbackForm.invalid) return;
    this.disableButton = true;
    const user = this.feedbackForm.getRawValue(); 
    this.firestoreService
    .feedback(user.message,user.email,user.fullName).then(() => {
      this.router.navigateByUrl('/feedbacks')
    })
  }
 
}
 