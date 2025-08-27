import React, { useState } from "react";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";
import AllTasks from "../other/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="  w-screen p-7 bg-[#1C1C1C] ">
      <Header changeUser={props.changeUser} props={props}/>
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
