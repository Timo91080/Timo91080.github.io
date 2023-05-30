import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';


const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const register = (userData) => {
    setUser(userData);
    
  };
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      history.push('/private/private-acceuil'); // Rediriger vers la page privée après la connexion réussie
      console.log('Connexion réussie pour l\'utilisateur:', userCredential.user.uid);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  };
  
  const logout = () => {
    setUser(null);
  };
 
  const authContextValue = {
    user,
    register,
    logout,
    signIn // Ajoutez la fonction signIn au contexte
  };

  return (
    <UserContext.Provider value={authContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
