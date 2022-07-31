import { db } from "../firebase-config";
import { query, collection, getDocs } from "firebase/firestore";

// Get all projects from Firestore
export const getProjects = async () => {
  const q = query(collection(db, "projects"));
  const querySnapshot = await getDocs(q);

  if (querySnapshot) {
    let projects = [];
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
    return projects;
  } else {
    console.log("no project found");
    return {};
  }
};
