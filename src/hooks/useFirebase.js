import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from '../components/Firebase/firebase.init';

initializingAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        });
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;