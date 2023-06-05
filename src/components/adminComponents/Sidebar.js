import React from "react";

function Sidebar({ activeTab, handleTabClick }) {
  return (
    <div
      className="bg-gray-100 p-2 flex flex-col rounded shadow h-56"
      style={{ width: "17%" }}
    >
      <p
        onClick={() => handleTabClick("subjects")}
        className={
          activeTab == "subjects"
            ? "my-2 p-2 rounded cursor-pointer bg-gray-200 font-semibold"
            : "my-2 p-2 rounded cursor-pointer text-gray-500"
        }
      >
        Subjects
      </p>
      <p
        onClick={() => handleTabClick("notes")}
        className={
          activeTab == "notes"
            ? "my-2 p-2 rounded cursor-pointer bg-gray-200 font-semibold"
            : "my-2 p-2 rounded cursor-pointer text-gray-500"
        }
      >
        Notes
      </p>
    </div>
  );
}

export default Sidebar;
