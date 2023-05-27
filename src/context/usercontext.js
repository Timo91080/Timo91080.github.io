import { createContext,useState,useEffect } from "react";

import { signWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged} from "firebase/auth"

import {auth} from "../firebase-config"

export const UserContext = createContext()

export function UserContextProvider(props) {

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const Register = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

const  [modalState, setModalState] = useState({
registerModal: false,
loginModal: false})

const toggleModals = modal=> {
    if(modal === "login") {
        setModalState({
      registerModal: false,
      loginModal: true
        })
    }

    if(modal === "register") {
        setModalState({
      registerModal: true,
      loginModal: false
        })
    }
    if(modal === "close") {
        setModalState({
      registerModal: false,
      loginModal: false
        })
    }


}



return (
    <UserContext.Provider value={{modalState, toggleModals, Register}}>
       {props.children}
    </UserContext.Provider>
)

}