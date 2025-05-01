
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

  const firebaseConfig = {
    apiKey: "AIzaSyDNCvdQ_5BqgfK0yYyZDQOUqLx_hrhEfdc",
    authDomain: "globsea-exim.firebaseapp.com",
    databaseURL: "https://globsea-exim-default-rtdb.firebaseio.com",
    projectId: "globsea-exim",
    storageBucket: "globsea-exim.firebasestorage.app",
    messagingSenderId: "265643438623",
    appId: "1:265643438623:web:4ca8018d460ce14ab5db2a",
    measurementId: "G-Z1YHDQVPDS"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);