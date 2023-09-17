import React, { useEffect, useState } from "react";
import UserNoteSidebar from "../../components/userNoteComponents/UserNoteSidebar";
import UserNoteSidebarContainer from "../../components/userNoteComponents/UserNoteSidebarContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import UserNoteShowLoginError from "../../components/Shrimmers/UserNoteShowLoginError";

function Notes() {
  const { authToken } = useSelector((state) => state.auth);
  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Operating System");
  const [data, setData] = useState("Operating System");
  const [notes, setNotes] = useState([]);

  const handleFetchNotes = async (slug) => {
    setLoading(true);

    const _data = [];

    const q = query(collection(db, "notes"), where("subject", "==", slug));
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

  const handleTabClick = async ({ slug, title }) => {
    setActiveTab(title);
    setData(title);
    handleFetchNotes(slug);
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
          slug: doc.data()["slug"],
        };
        // eslint-disable-next-line
        document.push(subject);
      });
      // eslint-disable-next-line
      setSubjectList(document);
    };

    fetchSubjects();
    handleFetchNotes("operating-system");
    setLoading(false);
    // eslint-disable-next-line
  }, [document]);

  return (
    <div className="container mx-auto">
      <div className="m-2 flex flex-col-reverse md:m-0 lg:m-0 md:flex lg:flex md:flex-row lg:flex-row md:mt-4 lg:mt-4">
        <UserNoteSidebar
          handleTabClick={handleTabClick}
          subjects={subjectList}
          activeTab={activeTab}
        />
        {authToken === null ? (
          <UserNoteShowLoginError />
        ) : (
          <UserNoteSidebarContainer
            title={data}
            notes={notes}
            loading={loading}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Notes;
