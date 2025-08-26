import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <>
    <div className='flex mt-10 gap-5 justify-between'>
        <div className='w-[45%] p-10 bg-emerald-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.newTask}</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-[45%] p-10 bg-red-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.completed}</h2>
            <h2 className='text-xl font-semibold'>Completed</h2>
        </div>
        <div className='w-[45%] p-10 bg-blue-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.active}</h2>
            <h2 className='text-xl font-semibold'>Active</h2>
        </div>
        <div className='w-[45%] p-10 bg-yellow-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.failed}</h2>
            <h2 className='text-xl font-semibold'>Failed</h2>
        </div>
    </div>
    </>
  )
}

export default TaskListNumbers