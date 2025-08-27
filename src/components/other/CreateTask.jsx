import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Text, setText] = useState("");
  const [Date, setDate] = useState("");
  const [Category, setCategory] = useState("");
  const [Task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
  
    const newTask = {
      title: Title,
      description: Description,
      text: Text,
      date: Date,
      category: Category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    
  
    const data = [...userData]; // copy
    data.forEach(function (elem) {
      if (Text === elem.firstname) {
        elem.tasks.push(newTask);
      }
    });
  
    setUserData(data);
    console.log(data);
  
    // localStorage.setItem("employees", JSON.stringify(data));
  
    // reset form
    setTitle("");
    setDescription("");
    setText("");
    setDate("");
    setCategory("");
  };
  
  return (
    <div className="w-full mt-7 bg-[#1C1C1C]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex"
      >
        <div className="w-3/6">
          <h2>Task Title</h2>
          <input
            type="text"
            placeholder="Make a UI Design"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border w-3/4 rounded-lg p-1"
          />

          <h2 className="mt-3">Date</h2>
          <input
            type="date"
            className="border w-3/4 rounded-lg p-1"
            value={Date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <h2 className="mt-3">Assign To</h2>
          <input
            type="text"
            value={Text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="employee name"
            className="border w-3/4 rounded-lg p-1"
          />
          <h2 className="mt-3">Category</h2>
          <input
            type="text"
            placeholder="Designer, Developer .."
            value={Category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="border w-3/4 rounded-lg p-1"
          />
        </div>
        <div className="w-3/6 flex flex-col">
          <h2>Description</h2>
          <textarea
            name=""
            id=""
            maxLength={500}
            placeholder="Description max 500 words"
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            cols={30}
            rows={10}
            className="border rounded-lg p-1"
          ></textarea>

          <button className="p-2  rounded-lg bg-emerald-600 cursor-pointer mt-2 text-white font-semibold hover:bg-emerald-800">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
