import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData);

  return (
    <>
    <div className="bg-gray-600 flex p-2 mt-5 justify-between">
      <h1 className="w-1/4">Employee Name</h1>
      <h1 className="w-1/4">New Task</h1>
      <h1 className="w-1/4">Active Task</h1>
      <h1 className="w-1/4">Completed</h1>
      <h1 className="w-1/4">Failed</h1>
    </div>

    <div id="allTask" className="bg-[#1C1C1C]  mt-5">
      {userData .map((elem, idx) => {
        return (
          <div className="bg-gray-700 flex p-2 mt-2 justify-between border-2 border-gray-400 " key={idx}>
            <h1 className="w-1/4">{elem.firstname}</h1>
            <h1 className="w-1/4">{elem.taskSummary.newTask}</h1>
            <h1 className="w-1/4">{elem.taskSummary.active}</h1>
            <h1 className="w-1/4">{elem.taskSummary.completed}</h1>
            <h1 className="w-1/4">{elem.taskSummary.failed}</h1>

          </div>
        );
      })}
    </div>
    </>
  );
};

export default AllTasks;
