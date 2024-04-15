import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const privateKey = process.env["NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIALS_PRIVATE_KEY"];
const clientEmail = process.env["NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIALS_CLIENT_EMAIL"];
const projectId = process.env["NEXT_PUBLIC_FIREBASE_ADMIN_CREDENTIALS_PROJECT_ID"];

if (!privateKey || !clientEmail || !projectId) {
  throw new Error(
    "Failed to load Firebase credentials. " +
      "Follow the instructions here: https://firebase.google.com/docs/admin/setup " +
      "to set your Firebase credentials inside environment variables.",
  );
}

// App
export const app = initializeApp({
  databaseURL: `https://${projectId}.firebaseio.com`,
  credential: cert({
    privateKey: privateKey,
    clientEmail: clientEmail,
    projectId: projectId,
  }),
});

// Database
export const firestore = getFirestore(app);

// Storage
export const storage = getStorage(app);

// Auth
export const auth = getAuth(app);
