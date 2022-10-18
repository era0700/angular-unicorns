import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  feedbackForm!: FormGroup;
  wasValidated = false;
  disableButton = false;

  constructor() {
    this.feedbackForm = new FormGroup({
      message: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      fullName: new FormControl(null, Validators.required),
    });
   }

  ngOnInit(): void { }
  submit() {
    this.wasValidated = true;
    if (this.feedbackForm.invalid) return;
    this.disableButton = true;
    const user = this.feedbackForm.getRawValue();
  }
  storeFeedback() {
    
  }
}
