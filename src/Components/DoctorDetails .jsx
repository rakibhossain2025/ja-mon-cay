import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { setlc } from '../js/js';

const DoctorDetails = () => {
  const showBook = useNavigate()
  const alldoctor = useLoaderData()
  const { id } = useParams()
  console.log(id)
  const details = alldoctor.find(data => data.id == id);
  console.log(details)
  const handleDetails = (id) => {
    const asaki = setlc(id)
    if (!asaki) {
      alert('Booking already done you will be redirecting to booking page')
      showBook("/my-booking")
      return
    }
    showBook("/my-booking")
  }
  return (
    <div>
      <h1>name {details.name}</h1>
      <h1>education {details.degree}</h1>
      <button onClick={() => handleDetails(id)}>add book marks </button>
    </div>
  );
};

export default DoctorDetails;