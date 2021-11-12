/* import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"; */

/*
initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState({}) */  /* register new user */


    /* const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
 */
    // google signin
/* const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)

}; */

    // email & password signup
    /* const register = () => {
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((result) => {
                userDisplayName()
                setUserInfo({})

            })
            .catch((error) => {
                setError(error.message)
            });
    }; */

    // email & password signin
/* const login = () => {
    return signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)

}; */

    // store signed in user
    /* useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        });
        return () => unSubscribe;
    }, []) */

    // set user name & url
    /* const userDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: userInfo.name, photoURL: userInfo.photo
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    } */

    // user logout
  /*   const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            });
    } */

    /* return {
        signInWithGoogle,
        user,
        error,
        logOut,
        userInfo,
        setUser,
        setError,
        setUserInfo,
        register,
        login
    }

};

export default useFirebase; */





// copy

import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init.js";
initializeFirebase();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    // clear error
    useEffect(() => {
        ClearError();
    }, [error]);

    //google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };


    //signInWithEmailAndPassword
    const signInWithEmail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
            })
            .catch((err) => setError(err.message));
    };

    // sign out
    const logOut = () => {
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    // get currently signed in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
        });
        return () => unsubscribe;
    }, [user]);

    // get name
    const getName = (e) => {
        setName(e?.target?.value);
    };
    // get email
    const getEmail = (e) => {
        setEmail(e?.target?.value);
    };
    // get password
    const getPassword = (e) => {
        setPassword(e?.target?.value);
    };
    // get password
    const getPhotoURL = (e) => {
        setPhotoURL(e?.target?.value);
    };

    // signUp
    const signUpWithEmail = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update name and email
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        }).then((result) => { });
    };

    // sendVilifiedEmail
    function sendVilifiedEmail() {
        sendEmailVerification(auth.currentUser).then((result) => {
            alert(
                `Please verify your email, a verification email has been sent to ${email}`
            );
        });
    }

    return {
        sendVilifiedEmail,
        setUserName,
        sendEmailVerification,
        signInWithGoogle,
        user,
        setUser,
        error,
        auth,
        setError,
        logOut,
        getEmail,
        getPassword,
        signUpWithEmail,
        signInWithEmail,
        getName,
        getPhotoURL,
    };
};

export default useFirebase;