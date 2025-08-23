import React from 'react'

const TaskListNumbers = () => {
  return (
    <>
    <div className='flex mt-10 gap-5 justify-between'>
        <div className='w-[45%] p-10 bg-emerald-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-[45%] p-10 bg-red-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-[45%] p-10 bg-blue-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-[45%] p-10 bg-yellow-600 rounded-lg'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
    </div>
    </>
  )
}

export default TaskListNumbers