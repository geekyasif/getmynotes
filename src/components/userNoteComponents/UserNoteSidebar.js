import React from "react";
import Loader from "react-js-loader";

function UserNoteSidebar({ handleTabClick, subjects, activeTab }) {
  return (
    <div className="sidebar-container bg-gray-100 p-4 rounded mr-4 shadow mb-4">
      {subjects.length === 0 ? (
        <Loader type="spinner-default" bgColor={"blue"} size={30} />
      ) : (
        subjects.map((subject) => (
          <p
            key={subject.id}
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
