import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  feedback: any;

  constructor(private firestore: Firestore) { }

  storeUser(user: User): Promise<void> {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return setDoc(userDocRef, user);
  }

  

  storeFeedback(message: string, email: string, fullName: string) {
    let feedback = {
      email: email,
      message: message,
      fullName: fullName,
    }
    return addDoc(collection(this.firestore, "feedback"), feedback);

  }
  createPosts(title: string, content: string, date: string,) {
    let postData = {
      title: title,
      content: content,
      createdDate: date,
    
    }
    return addDoc(collection(this.firestore, "posts"), postData)
  }
   getPosts(){
    return doc(this.firestore, "posts")
   }
   getFeedbacks(){
    return doc(this.firestore,"feedbacks")
   }
}
