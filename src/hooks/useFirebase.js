import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({})  /* register new user */


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google signin
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch(err => setError(err.message))
    }

    // email & password signup
    const register = () => {
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((result) => {
                userDisplayName()
                setUserInfo({})

            })
            .catch((error) => {
                setError(error.message)
            });
    };

    // email & password signin
    const login = () => {
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setUserInfo({});
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // store signed in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        });
        return () => unSubscribe;
    }, [])

    // set user name & url
    const userDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: userInfo.name, photoURL: userInfo.photo
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }

    // user logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        userInfo,
        setUserInfo,
        register,
        login
    }

};

export default useFirebase;