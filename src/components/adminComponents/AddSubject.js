import React, { useState } from "react";
import useSubject from "../../hooks/useSubject";

function AddSubject() {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const { addSubject } = useSubject();

  const handleAddSubject = async () => {
    if (subject !== "") {
      const data = {
        title: subject,
        slug: subject.toLocaleLowerCase().replaceAll(" ", "-"),
      };
      addSubject(data, setSubject, setLoading);
    } else {
      return alert("Subject should not be empty!");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow" style={{ width: "28%" }}>
      <label>Name</label>
      <br />
      <input
        placeholder="Subject Name"
        className="my-4 p-2 rounded w-full"
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <button
        className="bg-blue-500 text-white font-semibold p-1 px-4 rounded float-right"
        onClick={() => handleAddSubject()}
      >
        {loading ? "Adding..." : "Add Subject"}
      </button>
    </div>
  );
}

export default AddSubject;
