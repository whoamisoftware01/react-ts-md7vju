import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiT1ZLdNPxyfGsltiQAsKUJYjyp1kNco4",
  authDomain: "projectinvisto.firebaseapp.com",
  projectId: "projectinvisto",
  storageBucket: "projectinvisto.appspot.com",
  messagingSenderId: "985343957273",
  appId: "1:985343957273:web:92e6c5630c9aa4258fcd88",
};

firebase.initializeApp(firebaseConfig)

export default firebase