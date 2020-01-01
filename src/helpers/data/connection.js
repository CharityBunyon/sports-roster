import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

// function that returns the application
const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};

export default firebaseApp;
