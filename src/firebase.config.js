import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"




const firebaseConfig = {
    apiKey: "AIzaSyCSrG2M2NgsN7eDTfQBU80gCdcWxIsRIXE",
    authDomain: "restauranapp-dc3c9.firebaseapp.com",
    databaseURL: "https://restauranapp-dc3c9-default-rtdb.firebaseio.com",
    projectId: "restauranapp-dc3c9",
    storageBucket: "restauranapp-dc3c9.appspot.com",
    messagingSenderId: "471947260862",
    appId: "1:471947260862:web:0932b9a1883f377fe43fef"
};

const app = getApps.Length > 0? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };