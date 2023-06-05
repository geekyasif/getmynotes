import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

function useSubject() {
  const [subjectList, setSubjectList] = useState([]);

  // fetching all the subjects
  const fetchSubjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subjects"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
      }));
      setSubjectList(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // adding subjects
  const addSubject = async (data, setSubject, setLoading) => {
    try {
      setLoading(true);
      await addDoc(collection(db, "subjects"), data);
      setSubject("");
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  // deleting notes
  const deleteSubject = async (slug) => {
    await deleteDoc(doc(db, "subjects", slug));
    fetchSubjects();
  };

  return { fetchSubjects, addSubject, deleteSubject, subjectList };
}

export default useSubject;
