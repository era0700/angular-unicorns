import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  registerUser(user: any): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, "users"), user);
  }
}
