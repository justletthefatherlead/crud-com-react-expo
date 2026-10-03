import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    browserLocalPersistence,
    getReactNativePersistence
} from "firebase/auth";
import { getDatabase } from "firebase/database"; // 1. Importe o Realtime Database

import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnS2fzRwnwhRosV3fvP_qoXGtR6UvC1cs",
  authDomain: "novo-projeto-289c0.firebaseapp.com",
  databaseURL: "https://novo-projeto-289c0-default-rtdb.firebaseio.com",
  projectId: "novo-projeto-289c0",
  storageBucket: "novo-projeto-289c0.firebasestorage.app",
  messagingSenderId: "673288988009",
  appId: "1:673288988009:web:7e0877016ed58d0b5a49f8"
};

const app = initializeApp(firebaseConfig);


const persistence = Platform.OS === 'web'
  ? browserLocalPersistence
  : getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, { persistence });


const db = getDatabase(app);


export { auth, db };