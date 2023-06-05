import React from "react";
import Loader from "react-js-loader";
import UserNoteSubjectSidebarShrimmer from "../Shrimmers/UserNoteSubjectSidebarShrimmer";
import UserNoteContainerShrimmer from "../Shrimmers/UserNoteContainerShrimmer";

function UserNoteSidebarContainer({ title, notes, loading }) {

  return (
    <div
      // style={{ width: "80%" }}
      className="md:mr-1 lg:mr-1 bg-gray-100 w-full p-2 rounded mb-2 md:mb-0 lg:mb-0"
    >
      <p className="md:text-2xl lg:text-2xl text-lg font-bold mb-4 text-center mt-2">
        {title}
      </p>

      {loading ? (
        <UserNoteContainerShrimmer/>
      ) : (
        <ul>
          {notes.length === 0 ? (
            <p className="text-center mt-4">No data found !</p>
          ) : (
            notes.map((note) => (
             <div>
               <li className="my-3" key={note.id}>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-indigo-500"
                  download
                >
                  {note.title}
                </a>
              </li>
             </div>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default UserNoteSidebarContainer;
