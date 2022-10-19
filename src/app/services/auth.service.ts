import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async signin(email: string , password : string): Promise<firebase.auth.UserCredential> {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async signup(email: string , password : string) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }
}
