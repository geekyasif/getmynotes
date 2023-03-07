import React from "react";
import Loader from "react-js-loader";

function UserNoteSidebarContainer({ data, notes, loading }) {
  return (
    <div
      style={{ width: "80%" }}
      className="bg-gray-100 p-4 rounded flex flex-col shadow mb-4 "
    >
      <p className="text-2xl font-bold mb-4 text-center mt-2">{data}</p>

      {loading ? (
        <div className="flex justify-center items-start w-full h-full">
          <Loader type="spinner-default" bgColor={"blue"} size={30} />
        </div>
      ) : (
        <ul>
          {notes.length === 0 ? (
            <p className="text-center mt-4">No data found !</p>
          ) : (
            notes.map((note) => (
              <li className="my-3" key={note.id}>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-indigo-500"
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
