// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5WDu8aTDP_Rtw7PErzmB9i8O3OtZmfNc",
    authDomain: "house-marketplace-app-5d308.firebaseapp.com",
    projectId: "house-marketplace-app-5d308",
    storageBucket: "house-marketplace-app-5d308.appspot.com",
    messagingSenderId: "231581542918",
    appId: "1:231581542918:web:20a7c02cd659dc7384f187"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();