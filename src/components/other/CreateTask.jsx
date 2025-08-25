import React, { useState } from 'react'

const CreateTask = () => {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Text, setText] = useState("");
    const [Category, setCategory] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
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
              setTitle(e);
            }}
            className="border w-3/4 rounded-lg p-1"
          />

          <h2 className="mt-3">Date</h2>
          <input type="date" className="border w-3/4 rounded-lg p-1"  />
          <h2 className="mt-3">Assign To</h2>
          <input
            type="text"
            value={Text}
            onChange={(e) => {
              setText;
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
              setCategory(e);
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
              setDescription(e);
            }}
            cols={30}
            rows={10}
            className="border rounded-lg p-1"
          ></textarea>

          <button className="p-2  rounded-lg bg-emerald-600 cursor-pointer mt-2 text-white font-semibold hover:bg-emerald-800">Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask