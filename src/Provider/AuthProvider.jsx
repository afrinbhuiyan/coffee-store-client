 import { useState } from "react";
import { createContext } from "react";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

const auth = getAuth(app);

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    };

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;