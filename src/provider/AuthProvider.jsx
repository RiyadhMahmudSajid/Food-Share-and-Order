import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase-config';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logoutUser,
        login,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;