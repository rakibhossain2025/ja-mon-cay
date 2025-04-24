import React from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';


const AllDoctors = () => {
  const doctorData = useLoaderData()

  return (
    <>
      <div>
        all doctor here
        {/* please style me */}
        <div >
          {
            doctorData.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
          }
        </div>

      </div>

    </>
  );
};

export default AllDoctors;