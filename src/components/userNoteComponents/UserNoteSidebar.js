import React from "react";
import Loader from "react-js-loader";

function UserNoteSidebar({ handleTabClick, subjects, activeTab }) {

  return (
    <div className="p-2 bg-gray-100 rounded md:mr-2 lg:mr-2">
      {/* <p className="my-2 ml-1 font-bold text-lg md:text-sm lg:text-lg">Subjects</p> */}
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
