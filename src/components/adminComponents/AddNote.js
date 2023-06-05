import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import useSubject from "../../hooks/useSubject";

function AddNote() {
  const [loading, setLoading] = useState(false);
  const { fetchSubjects, subjectList } = useSubject();
  const [note, setNote] = useState({
    title: "",
    url: "",
    subject: "",
    slug: "",
  });

  const handleInputNote = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleAddNote = async () => {
    const data = {
      title: note.title,
      url: note.url,
      subject: note.subject.toLocaleLowerCase().replaceAll(" ", "-"),
      slug: note.title.toLocaleLowerCase().replaceAll(" ", "-"),
    };

    if (note.title === "" || note.url === "" || note.subject === "") {
      return alert("All fields are requiired !");
    }

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "notes"), data);
      setLoading(false);
    } catch (e) {
      // console.error("Error adding document: ", e);
    }

    setNote({
      title: "",
      url: "",
      subject: "",
      slug: "",
    });
  };

  return (
    <div
      className="bg-gray-100 p-8 rounded shadow mr-2"
      style={{ width: "70%" }}
    >
      <label>Title</label>
      <br />
      <input
        placeholder="Note Title"
        className="p-2 rounded w-full my-4"
        type="text"
        name="title"
        value={note.title}
        onChange={handleInputNote}
      />
      <br />
      <input
        placeholder="Note URl"
        className="p-2 rounded w-full my-4"
        type="text"
        name="url"
        value={note.url}
        onChange={handleInputNote}
      />
      <br />
      <label htmlFor="subjects">Choose a subject:</label>
      <br />
      <select
        id="subjects"
        className="w-full my-3"
        name="subject"
        value={note.subject}
        onChange={handleInputNote}
      >
        <option value=""> {` select subject `}</option>
        {subjectList.map(({ title, id }) => (
          <option value={title} key={id}>
            {title}
          </option>
        ))}
      </select>
      <br />
      <button
        className="bg-blue-500 text-white font-semibold p-1 px-4 rounded mt-5 float-right"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
}

export default AddNote;
