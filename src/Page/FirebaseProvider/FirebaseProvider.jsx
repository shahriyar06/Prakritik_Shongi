import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';

export const AuthContext = createContext(null)

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
        signout
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