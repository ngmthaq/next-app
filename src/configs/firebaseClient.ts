import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// Configs
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// App
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Database
export const firestore = getFirestore(app);

// Storage
export const storage = getStorage(app);
export const storageRef = ref(storage);
export const getFolderRef = (folder: string) => ref(storageRef, folder);
export const uploadFile = async (file: File | Blob, path: string) => uploadBytes(getFolderRef(path), file);
export const getFile = async (fullPath: string, responseType: "blob" | "url" = "url") => {
  const url = await getDownloadURL(ref(storage, fullPath));
  if (responseType === "url") return url;
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};
export const deleteFile = async (fullPath: string) => {
  const imageRef = ref(storage, fullPath);
  await deleteObject(imageRef);
};

// Auth
export const auth = getAuth(app);
export const getAuthUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) resolve(user);
        else resolve(null);
      },
      (error) => reject(error),
    );
  });
};

