import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';

export const AuthContext = createContext(null)

// social auth provider
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [ loading, setloading ] = useState(true)


    // Create New User
    const signup = (email, password) =>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


    // Updateuser
    const updateuserprofile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    // SignIn User
    const signin = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const googlelogin = () =>{
        setloading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    // Github login
    const githublogin = () =>{
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
    }

    // Sign out
    const signout = () =>{
        setloading(true)
        setuser(null)
        return signOut(auth)
    }


    // Obserber
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           
              setuser(user)
              setloading(false)
           
          });
          return () => unsubscribe();
    },[user])

    const allvalue = {
        user,
        loading,
        signup,
        updateuserprofile,
        signin,
        signout,
        googlelogin,
        githublogin
    }

    return (
        <div>
            <AuthContext.Provider value={allvalue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;