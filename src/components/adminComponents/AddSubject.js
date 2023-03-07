import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../../firebase";


function AddSubject() {
    
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAddSubject = async () => {
      try {
        setLoading(true);
        const docRef = await addDoc(collection(db, "subjects"), {
          title: subject,
        });
        setSubject("");
        setLoading(false);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

  return (
    <div className='bg-gray-100 p-4 rounded shadow' style={{width: "28%"}}>
        <label>Name</label>
        <br/>
        <input placeholder='Subject Name' className='my-4 p-2 rounded w-full' type="text" onChange={(e) => setSubject(e.target.value)}/>
        <br/>
        <button className='bg-blue-500 text-white font-semibold p-1 px-4 rounded float-right' onClick={ () => handleAddSubject()}>{loading ? "Adding..." : "Add Subject"}</button>
    </div>
  )
}

export default AddSubject