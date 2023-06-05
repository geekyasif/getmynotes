import React from "react";
import Loader from "react-js-loader";
import UserNoteSubjectSidebarShrimmer from "../Shrimmers/UserNoteSubjectSidebarShrimmer";

function UserNoteSidebar({ handleTabClick, subjects, activeTab }) {

  return (
    <div className="p-2 bg-gray-100 rounded md:mr-2 lg:mr-2 border">
      {subjects.length === 0 ? (
        <UserNoteSubjectSidebarShrimmer/>
      ) : (
        subjects.map((subject, index) => (
          <p
            key={index}
            onClick={() => handleTabClick(subject)}
            className={
              activeTab === subject.title
                ? "bg-indigo-500 text-sm text-white cursor-pointer p-2 rounded my-2"
                : "cursor-pointer p-2 rounded my-2 text-sm"
            }
          >
            {subject.title}
          </p>
        ))
      )}
    </div>
  );
}

export default UserNoteSidebar;
