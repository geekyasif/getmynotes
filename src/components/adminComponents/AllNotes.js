import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    const data = [];

    const querySnapshot = await getDocs(collection(db, "notes"));
    querySnapshot.forEach((doc) => {
      const subject = {
        id: doc.id,
        title: doc.data()["title"],
        url: doc.data()["url"],
        subject: doc.data()["subject"],
      };
      data.push(subject);
    });

    setNotes(data);
  };

  useEffect(() => {
    setLoading(true);

    fetchNotes();
    setLoading(false);
  }, []);

  const handleDeleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    fetchNotes();
  };

console.log(notes)
  return (
    <div>
      {notes.map((note) => (
        <div className="flex flex-row justify-between p-2 my-2 rounded" key={note.id}>
          <p className="text-lg">{note.title}  <span className="ml-10 bg-yellow-400 rounded p-2 text-sm">{ note.subject.replaceAll("-", " ").slice(0, 1).toUpperCase() + note.subject.replaceAll("-", " ").slice(1) }</span></p>
          <p
            className="cursor-pointer border p-2 rounded bg-red-600 text-white"
            onClick={() => handleDeleteNote(note.id)}
          >
            Delete
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllNotes;
