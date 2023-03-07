import React, { useEffect, useState } from 'react'
import { doc, deleteDoc, collection, getDocs } from "firebase/firestore"; 
import {db} from "../../firebase";


function AllSubjects() {

  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);


  // deleting notes
  const handleDeleteSubject = async (title) => {
    await deleteDoc(doc(db, "subjects", title));
  }
  

  useEffect(() => {

    setLoading(true);

    const fetchSubjects = async () => {
    
      const data = [];
  
      const querySnapshot = await getDocs(collection(db, "subjects"));
      querySnapshot.forEach((doc) => {
        const subject = {
          id: doc.id,
          title: doc.data()["title"]
        }
        data.push(subject)
      });
  
      setSubjectList(data);
  
    }

    fetchSubjects();
    setLoading(false)

  },[])

  return (
    <div className=''>
      {
        loading ? <p>Loading...</p> : 
        subjectList.map( (subject) => (
          <div className='flex flex-row justify-between p-2 my-2 rounded'>
            <p key={subject.id}>{subject.title}</p>
            <p onClick={ () => handleDeleteSubject(subject.title)}>Delete</p>
          </div>
        ))
      }
    </div>
  )
}

export default AllSubjects