import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();


    // 1 createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 2. Email $ password 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 3. GoogleSignIn 
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // LogOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user inside state', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();

    }, []);


    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading,
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;