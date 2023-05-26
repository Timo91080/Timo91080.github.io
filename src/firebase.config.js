
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"; //peremt de nous authentifier quand on va utiliser des fonctions

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, //process.env qui permet de retrouver notre variable d'environnement et le nom qu'on veut utiliser
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);