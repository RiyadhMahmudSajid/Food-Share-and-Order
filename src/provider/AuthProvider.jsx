import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase-config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    console.log(user)
       
     const createUser = (email,password) =>{
        
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const logoutUser = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logoutUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;