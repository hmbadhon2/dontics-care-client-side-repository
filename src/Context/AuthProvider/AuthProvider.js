import React, {  createContext, useContext } from 'react';
import { app } from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext = createContext(app)
const auth = getAuth()
const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword (auth, email, password)
    }

    const authInfo ={
        createUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;