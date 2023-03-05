import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';

function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {


    setLoading(true);

    const fetchNotes = async () => {
    
      const data = [];
  
      const querySnapshot = await getDocs(collection(db, "notes"));
      querySnapshot.forEach((doc) => {
        const subject = {
          id: doc.id,
          title: doc.data()["title"],
          url: doc.data()["url"],
          subject_id: doc.data()["subject_id"]
        }
        data.push(subject)
      });
  
      setNotes(data);
  
    }

    fetchNotes();
    setLoading(false)


  },[])
  return (
    <div>
      {
        notes.map((note) => (
          <div className='flex flex-row justify-between p-2 my-2 rounded'>
            <p>{note.title}</p>
            <p>delete</p>
          </div>
        ))
      }
    </div>
  )
}

export default AllNotes