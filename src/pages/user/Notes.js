import React, { useEffect, useState } from "react";
import UserNoteSidebar from "../../components/userNoteComponents/UserNoteSidebar";
import UserNoteSidebarContainer from "../../components/userNoteComponents/UserNoteSidebarContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import Footer from "../../components/Footer";

function Notes() {
  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Operating System");
  const [data, setData] = useState("Operating System");
  const [notes, setNotes] = useState([]);

  const handleFetchNotes = async (title) => {
    setLoading(true);

    const _data = [];

    const q = query(collection(db, "notes"), where("subject", "==", title));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      _data.push({
        id: doc.id,
        title: doc.data().title,
        url: doc.data().url,
        subject: doc.data().subject,
      });
    });

    setNotes(_data);
    setLoading(false);
  };

  const handleTabClick = async ({ id, title }) => {
    setActiveTab(title);
    setData(title);
    handleFetchNotes(title);
  };

  // fetching subjects
  useEffect(() => {
    setLoading(true);

    const fetchSubjects = async () => {
      // eslint-disable-next-line
      const document = [];

      const querySnapshot = await getDocs(collection(db, "subjects"));
      querySnapshot.forEach((doc) => {
        const subject = {
          id: doc.id,
          title: doc.data()["title"],
        };
        // eslint-disable-next-line
        document.push(subject);
      });
      // eslint-disable-next-line
      setSubjectList(document);
    };

    fetchSubjects();
    handleFetchNotes("Operating System");
    setLoading(false);
    // eslint-disable-next-line
  }, [document]);

  return (
    <div className="h-full">
      <div className="container mx-auto flex md:flex-row sm:flex-row-reverse flex-wrap my-4 justify-around">
        <UserNoteSidebar
          handleTabClick={handleTabClick}
          subjects={subjectList}
          activeTab={activeTab}
        />
        <UserNoteSidebarContainer data={data} notes={notes} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}

export default Notes;
