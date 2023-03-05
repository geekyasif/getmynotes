import React, { useState } from 'react'

function AddNote() {
    
    const [title, setTitle] = useState("");
    const [file, setFile] = useState();

  return (
    <div className='bg-gray-100 p-8 rounded shadow mr-2' style={{width: "70%"}}>
        <label>Title</label>
        <br/>
        <input placeholder='Notes Title' className='p-2 rounded w-full my-4' type="text" onChange={(e) => setFile(e.target.value)}/>
        <br/>
        <label for="cars">Choose a subject:</label>
        <br/>
        <select name="cars" id="cars" className='w-full my-3'>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br/>
        <label>File</label>
        <input placeholder='Subject Name' className='my-1 rounded w-full ' type="file" onChange={(e) => setFile(e.target.value)}/>
        <br/>
        <button className='bg-blue-500 text-white font-semibold p-1 px-4 rounded mt-5 float-right'>Add Note</button>
    </div>
  )
}

export default AddNote