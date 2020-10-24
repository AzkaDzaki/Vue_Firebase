// src/firebaseConfig.js
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgk02nMQ35QuoLShOHFagrFwpm9Q1497U",
    authDomain: "interop-hospital.firebaseapp.com",
    databaseURL: "https://interop-hospital.firebaseio.com",
    projectId: "interop-hospital",
    storageBucket: "interop-hospital.appspot.com",
    messagingSenderId: "186356735865",
    appId: "1:186356735865:web:af1cb316206ce9e9c899a8",
    measurementId: "G-BSYXCQYNW5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
