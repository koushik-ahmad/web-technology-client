import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";



export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();


    // 1 createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 2. Email $ password 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 3. GoogleSignIn 
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }




    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,

    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;