import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyCg274AFFf6izRv94oKJBq2TIaAZkD4AHk",
      authDomain: "bookshelves-1cbd2.firebaseapp.com",
      databaseURL: "https://bookshelves-1cbd2.firebaseio.com",
      projectId: "bookshelves-1cbd2",
      storageBucket: "bookshelves-1cbd2.appspot.com",
      messagingSenderId: "726122688363",
      appId: "1:726122688363:web:b6f21454bda0d352f7662e"
    }
    firebase.initializeApp(config);
  }

}
