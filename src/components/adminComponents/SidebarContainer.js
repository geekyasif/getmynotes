import React from "react";
import AllNotes from "./AllNotes";
import AllSubjects from "./AllSubjects";

function SidebarContainer({ activeTab }) {
  return (
    <div className="bg-gray-100 ml-2 rounded p-4 shadow" style={{ width: "80%" }}>
      {activeTab === "subjects" && <AllSubjects />}
      {activeTab === "notes" && <AllNotes />}
    </div>
  );
}

export default SidebarContainer;
