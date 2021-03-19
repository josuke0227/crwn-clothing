import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD50p4iVDh8rByg9myDJdU1ggHqbZl9_Y4",
  authDomain: "crwn-db-b1ad5.firebaseapp.com",
  projectId: "crwn-db-b1ad5",
  storageBucket: "crwn-db-b1ad5.appspot.com",
  messagingSenderId: "683723093605",
  appId: "1:683723093605:web:cc83d090d0f6a9841db88c",
  measurementId: "G-EX0062KPE1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
