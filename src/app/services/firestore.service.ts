import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, addDoc, collection } from '@angular/fire/firestore';
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
}
