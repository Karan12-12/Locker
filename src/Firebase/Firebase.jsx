import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtIBEqlfhhR5oQRbhLmKCMH1vCSabvGgw",
  authDomain: "locker-7ea9e.firebaseapp.com",
  projectId: "locker-7ea9e",
  storageBucket: "locker-7ea9e.appspot.com",
  messagingSenderId: "890189691952",
  appId: "1:890189691952:web:4ed5dc9ba534637c8a81f5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
export const imageDb = getStorage(app);
