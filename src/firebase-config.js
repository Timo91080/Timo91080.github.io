import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Utilisez la fonction createUserWithEmailAndPassword
const register = async (userData) => {
  try {
    const { email, password } = userData;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Effectuez les opérations supplémentaires souhaitées après l'inscription réussie
    console.log("Inscription réussie pour l'utilisateur :", user.uid);
  } catch (error) {
    // Gérez les erreurs lors de l'inscription
    console.error("Erreur lors de l'inscription :", error);
    throw error;
  }
};

export default register;




/*import { initializeApp } from "firebase/app";
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

*/