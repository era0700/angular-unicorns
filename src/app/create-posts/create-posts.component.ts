import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  createpostsForm!: FormGroup
  disableButton = false;
  wasValidated = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService,
    private router: Router
  ) { 
    this.createpostsForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content:new FormControl(null,Validators.required)
})
  }

  ngOnInit(): void {
    
  }
  submit(){
    this.wasValidated = true;
    console.log('hello')
    if (this.createpostsForm.invalid) return;
    this.disableButton = true;
    const user = this.createpostsForm.getRawValue();
   

    this.firestoreService
    .createPosts(user.title, user.content).then(() => {
      this.router.navigate(['posts']);
    })

  }
}
