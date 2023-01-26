import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'


import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './service/user.service';
import { CompteUserComponent } from './components/compte-user/compte-user.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { PageListeComponent } from './page-liste/page-liste.component';
import { AProposComponent } from './a-propos/a-propos.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'compte', component: CompteUserComponent },
  { path: 'routes', component: PageListeComponent },
  { path: 'apropos', component: AProposComponent },
  { path: '**', component:HomeComponent}

];

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBbUdqxKvRQYZQa9pZGCEOmiGgX0siDCCg",
    authDomain: "bikeway-5837b.firebaseapp.com",
    projectId: "bikeway-5837b",
    storageBucket: "bikeway-5837b.appspot.com",
    messagingSenderId: "904017695465",
    appId: "1:904017695465:web:bef750d91d2f40989b1678",
    measurementId: "G-WJHPR60B7F"
  }
};



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompteUserComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    MapComponent,
    PageListeComponent,
    AProposComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,    
    GoogleMapsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
 
  exports:[
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }