import React from "react";

function UserNoteContainerShrimmer() {
  const notes = new Array(10).fill(0);

  return (
    <div >
      {notes.map((note, index) => (
        <div key={index} className="w-[98%] h-[30px] m-2 rounded p-2 bg-gray-200"></div>
      ))}
    </div>
  );
}

export default UserNoteContainerShrimmer;
