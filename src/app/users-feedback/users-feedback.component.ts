import { Component, OnInit } from '@angular/core';
import { Firestore,collection, query, getDocs } from '@angular/fire/firestore';
import { UserFeedback } from '../models/user-feedbacks.model';

@Component({
  selector: 'app-users-feedback',
  templateUrl: './users-feedback.component.html',
  styleUrls: ['./users-feedback.component.css']
})
export class UsersFeedbackComponent  implements OnInit {
  static fullName: any;
  feedback: Array<UserFeedback> = []; 
  constructor(private db: Firestore) {  } 

  ngOnInit(): void {
    this._getFeedbacks();
  }
  async _getFeedbacks() {
    const q = query(collection(this.db, 'feedback'));
    this.feedback = await getDocs(q).then(res => res.docs.map(d => d.data() as UserFeedback));
  }

}
