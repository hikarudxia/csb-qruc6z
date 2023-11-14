import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "./firebase.js";
import "./styles.css";

export const addUser = async (user, message) => {
  try {
    const docRef = await addDoc(collection(db, "tweets"), {
      user: user,
      message: message
    });
    console.log("Tweet saved with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding tweet: ", e);
  }
};

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

export const getTweets = async () => {
  const querySnapshot = await getDocs(collection(db, "tweets"));
  const tweets = [];
  querySnapshot.forEach((doc) => {
    tweets.push({ id: doc.id, ...doc.data() });
  });
  return tweets;
};
