import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBqjRISksYLMhnm_XbnAoW541IMa1aDxbk",
    authDomain: "web-course-game-store-8d9f5.firebaseapp.com",
    projectId: "web-course-game-store-8d9f5",
    storageBucket: "web-course-game-store-8d9f5.appspot.com",
    messagingSenderId: "150341205653",
    appId: "1:150341205653:web:26d96a3661264c896ea59c",
});

export const auth = app.auth();
export default app;
