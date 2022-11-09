import React, {  createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup} from 'firebase/auth'


export const AuthContext = createContext(app)
const auth = getAuth()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    },[])

    const logOut = () =>{
        return  signOut(auth)
    }

    const googleSignIn = (googleProvider) =>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }

    const gitHubSignIn = (githubProvider) =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo ={
        createUser,
        login,
        logOut,
        loading,
        user,
        googleSignIn,
        gitHubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;