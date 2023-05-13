import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // Create User for register page
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user for login page
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in user with github
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Sign in user with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = {
        user,
        createUser,
        signIn,
        githubSignIn,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;