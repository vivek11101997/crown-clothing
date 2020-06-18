import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyDBBCQosFmepSwdKXZeg63wx0QGptrjDYc",
    authDomain: "crown-db-b5914.firebaseapp.com",
    databaseURL: "https://crown-db-b5914.firebaseio.com",
    projectId: "crown-db-b5914",
    storageBucket: "crown-db-b5914.appspot.com",
    messagingSenderId: "78056792769",
    appId: "1:78056792769:web:911f8d88914bf7cbf2ea40"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('Error creating in user ', error.message);
        }
    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);


export default firebase;


