import React, { useEffect, useState } from "react";
import Loader from "react-js-loader";

function UserNoteSidebarContainer({ data, notes, loading }) {
  return (
    <div
      style={{ width: "78%" }}
      className="bg-gray-100 p-4 rounded flex flex-col shadow"
    >
      <p className="text-2xl font-bold mb-4">{data}</p>

      {loading ? (
        <Loader type="spinner-default" bgColor={"blue"} size={30} />
      ) : (
        <ul>
          {notes.length == 0 ? (
            <p>No data found !</p>
          ) : (
            notes.map((note) => (
              <li className="my-3" key={note.id}>
                <a
                  href={note.url}
                  target="_blank"
                  className="text-blue-600"
                  download
                >
                  {note.title}
                </a>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default UserNoteSidebarContainer;
