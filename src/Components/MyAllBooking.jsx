import React, { useEffect, useState } from 'react';
import { getlc } from '../js/js';
import { NavLink } from 'react-router';
import ShowAllBook from './ShowAllBook';



const Booking = () => {
  const [book, setBook] = useState([])
  useEffect(() => {

    const localData = getlc()
    fetch('./api.json')
      .then(res => res.json())
      .then(data => {
        const matchData = data.filter(bookData => localData.includes(String(bookData.id)))
        console.log(matchData)
        setBook(matchData)
      }
      )
  }, [])

  const handleBooking = (id) => {
    const uiUpdate = book.filter(i => i.id != id)

    setBook(uiUpdate)

    const getFromLSD = JSON.parse(localStorage.getItem("booking")) || []

    const upDateLSD = getFromLSD.filter(data => data != id)

    localStorage.setItem("booking", JSON.stringify(upDateLSD))
    const showRemove = book.find(a => a.id == id)
    alert(`item remove  ${showRemove}`)
  }


  return (<>

    <section className=' mx-auto max-w-7xl'>
      <div>
        {/* aita pani bath aponi parban tai kora desi na  //*na parla ami asi */}
        {/* <BerChar book={book} /> */}
      </div>
      {
        book.length == 0 ?
          <div className='flex min-h-[calc(100vh-239px)] justify-center items-center'>
            <div className='flex flex-col items-center space-y-4'>
              <h1 className='font-bold text-center text-3xl '>You have not Book any Appointment yet</h1>
              <p className='text-sm text-center'>If you dont book any doctors Appointment we cant show to you any data</p>

              <NavLink to={'/'} >
                <button className='btn border-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl bg-blue-200'>Go to see all Doctors</button>
              </NavLink>
            </div>
          </div>
          : <div className='text-center'>
            <h1 className='text-3xl font-bold mt-1'>My Today Appointments</h1>
            <p className='text-sm mb-4 text-gray-500 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </div>
      }
      <div className='space-y-4'>
        {
          
          book.map((data, i) => <ShowAllBook key={i} data={data} handleBooking={handleBooking}></ShowAllBook>)
        }
      </div>
    </section >
  </>
  );
};
export default Booking;