import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TablesPageComponent } from './tables-page/tables-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ParentLandingPageComponent } from './landing-page/parent-landing-page/parent-landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { HeroContentComponent } from './landing-page/hero-content/hero-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
// import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';




// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       scopes: [
//         'public_profile',
//         'email',
//         'user_likes',
//         'user_friends'
//       ],
//       customParameters: {
//         'auth_type': 'reauthenticate'
//       },
//       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     },

//   ],
//   tosUrl: '<your-tos-link>',
//   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
// };






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SignupPageComponent,
    TablesPageComponent,
    ParentLandingPageComponent,
    NavbarComponent,
    HeroContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterOutlet,
    MatGridListModule,
    NgFor,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // FirebaseUIModule.forFeature({
    //   signInOptions: [
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    // }),

  ],
  providers: [
    // { provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['localhost', 9099] : undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
