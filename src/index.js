import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

  firebase.initializeApp({
    apiKey: "AIzaSyC_WLNwPCqsAmJWb5BN_ui_iKtGjLeTJrU",
    authDomain: "evernote-clone---tutorial.firebaseapp.com",
    databaseURL: "https://evernote-clone---tutorial.firebaseio.com",
    projectId: "evernote-clone---tutorial",
    storageBucket: "evernote-clone---tutorial.appspot.com",
    messagingSenderId: "289459893422",
    appId: "1:289459893422:web:a3669702b7faaa1b72293f",
    measurementId: "G-3V76FNX8FC"
  });
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

serviceWorker.unregister();
