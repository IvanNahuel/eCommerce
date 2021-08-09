import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCC_XL9OOYY-hFkq-boQOfgQZT9oOP4HZo",
    authDomain: "game-store-afa80.firebaseapp.com",
    projectId: "game-store-afa80",
    storageBucket: "game-store-afa80.appspot.com",
    messagingSenderId: "587665451034",
    appId: "1:587665451034:web:c87b305005d0b5f29589a3"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export const database = firebase.firestore();
