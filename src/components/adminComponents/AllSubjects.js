import React, { useEffect, useState } from "react";
import useSubject from "../../hooks/useSubject";

function AllSubjects() {
  const { subjectList, fetchSubjects, deleteSubject } = useSubject();

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div className="">
      {subjectList.map((subject, index) => (
        <div
          className="flex flex-row justify-between p-2 my-2 rounded"
          key={index}
        >
          <p>{subject.title}</p>
          <p
            className="cursor-pointer border p-2 rounded bg-red-600 text-white"
            onClick={() => deleteSubject(subject.id)}
          >
            Delete
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllSubjects;
