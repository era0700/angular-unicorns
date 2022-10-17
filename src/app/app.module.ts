import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    DashboardComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAJBxR7H96PbjFsYmN83rKACprlE8yeSiY",
      authDomain: "angular-uniqueorns.firebaseapp.com",
      projectId: "angular-uniqueorns",
      storageBucket: "angular-uniqueorns.appspot.com",
      messagingSenderId: "879596367099",
      appId: "1:879596367099:web:898234d1be29b9d0b7945e"
    }),

    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
