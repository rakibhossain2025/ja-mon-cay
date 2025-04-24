import React from 'react';
import { Link } from 'react-router';
const Doctor = ({ doctor }) => {
  const style = {
    border: '2px solid red',
    margin: '20px'
  }
  const btnstyle = {
    backgroundColor: 'red',
    cursor: 'pointer',
    margin: '10px'
  }
  return (
    <div style={style}>
      {/* 
      
mon moto style koran single doctor aita mana home page a joto doctor oigulu aita 

      */}
      amar name {doctor.name}
      <br />
      amar kaj {doctor.degree}
      <br />

      <Link to={`doctor/${doctor.id}`}>
        <button style={btnstyle}>amar kacha asta taka lagba </button>
      </Link>
    </div>
  );
};

export default Doctor;