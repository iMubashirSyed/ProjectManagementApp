import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data}) => {
  return (
    <>
      <div id="tasklist" className="h-[55%]  flex items-center gap-5 mt-10 overflow-x-scroll">
        {data.tasks.map((elem, idx) => {
        if (AcceptTask) {
          return <AcceptTask key={idx} data={elem}/>
        }
        if (CompleteTask) {
          return <CompleteTask key={idx} data={elem}/>
        }
        if (FailedTask) {
          return <FailedTask key={idx} data={elem}/>
        }
        if (NewTask) {
          return <NewTask key={idx} data={elem}/>
        }
        })}
      </div>
    </>
  );
};

export default TaskList;
