import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//firebase auth
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],

})
export class SignupPageComponent implements OnInit {

  // private submissionForm: AngularFirestoreCollection<any>;

  constructor(private fb: FormBuilder, private firestore: Firestore, private afAuth: AngularFireAuth, private router: Router) { }

  form !: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zerodhaApiKey: ['', [Validators.required]],
      zerodhaApiSecret: ['', [Validators.required]],
      zerodhaRequestToken: ['', [Validators.required]],
      zerodhaTotalAmount: ['', [Validators.required]],
      binanceApiKey: ['', [Validators.required]],
      binanceSecretKey: ['', [Validators.required]],
      binanceToatal: ['', [Validators.required]],

    })
  }

  submitData(form: any) {
    // console.log(form.value);
    const collectionData = collection(this.firestore, 'users');
    addDoc(collectionData, form.value).then(() => {
      console.log("added data successfully");
    })
      .catch((err) => {
        console.log("error loading ..", err);

      })

  }


  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.router.navigate(['page']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
    console.log('UI shown');
  }

}
