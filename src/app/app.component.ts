import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( ) {
    var firebaseConfig = {
      apiKey: "AIzaSyDZeyBSE0oq_zBxU-JsXFxuz0vG2mx5Chs",
      authDomain: "agence-92d26.firebaseapp.com",
      databaseURL: "https://agence-92d26.firebaseio.com",
      projectId: "agence-92d26",
      storageBucket: "gs://agence-92d26.appspot.com",
      messagingSenderId: "257232656378",
      appId: "1:257232656378:web:cd66f2c8ff6e5830"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
