import React from 'react'

function UserNoteSubjectSidebarShrimmer() {
    const subjects = new Array(15).fill(0)
  return (
    <div>
        {
            subjects.map((subject, index) => (
                <div key={index} className='w-[98%] md:w-[200px] lg:w-[200px] h-[30px] bg-gray-200  p-2 rounded md:mr-2 lg:mr-2 m-2' ></div>
            ))
        }
    </div>
  )
}

export default UserNoteSubjectSidebarShrimmer