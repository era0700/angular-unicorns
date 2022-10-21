import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  storeUser(user: User): Promise<void> {
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return setDoc(userDocRef, user);
  }

  

  storeFeedback(feedback: any) {
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
}
