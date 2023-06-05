import React, { useState } from "react";
import AddNote from "../../components/adminComponents/AddNote";
import AddSubject from "../../components/adminComponents/AddSubject";
import Sidebar from "../../components/adminComponents/Sidebar";
import SidebarContainer from "../../components/adminComponents/SidebarContainer";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("subjects");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-6 py-6">
      <p className="text-center text-2xl font-bold">Admin Dashboard</p>
      <div className="flex flex-row flex-wrap my-6 justify-center">
        <AddNote />
        <AddSubject />
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        <Sidebar handleTabClick={handleTabClick} activeTab={activeTab} />
        <SidebarContainer activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Dashboard;
