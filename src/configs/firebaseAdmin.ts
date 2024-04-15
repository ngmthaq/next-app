import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { File } from "@google-cloud/storage";
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const privateKey = process.env["FIREBASE_ADMIN_CREDENTIALS_PRIVATE_KEY"];
const clientEmail = process.env["FIREBASE_ADMIN_CREDENTIALS_CLIENT_EMAIL"];
const projectId = process.env["FIREBASE_ADMIN_CREDENTIALS_PROJECT_ID"];

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
export const getBucketFile = (bucketName: string, fileName: string) => {
  const bucket = storage.bucket(bucketName);
  return bucket.file(fileName);
};
export const getFile = async (bucketFile: File, responseType: "blob" | "url" = "url") => {
  const url = await getDownloadURL(bucketFile);
  if (responseType === "url") return url;
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

// Auth
export const auth = getAuth(app);
export const getDecodedToken = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  const token = await auth.verifyIdToken(cookies.token);
  return token;
};

