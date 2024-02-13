import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZFeNlQAisLWvXhx_ICZEB5mzq35m4hcw",
    authDomain: "extension-5b80a.firebaseapp.com",
    projectId: "extension-5b80a",
    storageBucket: "extension-5b80a.appspot.com",
    messagingSenderId: "566755498743",
    appId: "1:566755498743:web:9accd2b46f6a3bdc84d1f2",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getdata = async () => {
    const dataRef = db
        .collection("google-extension")
        .doc("ur14VB53Bm1nc65evenJ");
    const doc = await dataRef.get();
    try {
        return doc.data();
    } catch (error) {
        return { error: "failed to fetch data" };
    }
};



export { getdata }