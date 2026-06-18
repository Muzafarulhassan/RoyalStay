import React from 'react'

function Booking() {
  return (
    <div className="grid grid-cols-4 gap-4  grid  shadow-md   items-center text-black bg-zinc-100 py-8 " id='booking'>
       <div className=' border p-2 rounded-lg w-full  mt-1 items-center  '>
        <p>Check In</p>
        <input type="date" />
      </div>

       <div className=' border p-2 rounded-lg w-full  mt-1 items-center'>
        <p>Check Out</p>
        <input type="date" />
      </div>
      <div className=' border p-2 rounded-lg w-full  mt-1 items-center'>
        <p>Guest</p>
        <input type='number'/>
      </div>
      <div className=' border p-2 rounded-lg w-full  mt-1 items-center'>
        <p>Rooms Avalibal</p>
        <input type='number'/>
      </div>
    </div>
  )
}

export default Booking
