import React from 'react'

const CompleteTask = () => {
  return (
<div className="w-[300px] h-full bg-red-400 rounded-lg shrink-0">
          <div className="flex justify-between p-7">
            <h3 className="text-white bg-red-600 font-bold p-2">{data.category}</h3>
            <h3 className="p-2 text-sm text-white">{data.date}</h3>
          </div>
          <div className="p-7">
            <h1 className="text-3xl font-semibold text-white ">{data.title}</h1>
            <p className="text-white text-sm mt-3 ">
              {data.description}
            </p>
          </div>
        </div>  )
}

export default CompleteTask