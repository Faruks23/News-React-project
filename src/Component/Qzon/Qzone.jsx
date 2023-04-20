import React from 'react';
import q1 from '../../assets/qZone1.png'
import q2 from '../../assets/qZone2.png'
import q3 from '../../assets/qZone3.png'
const Qzone = () => {
  return (
    <>
      <h4 className='mt-4'>
        Qzone
      </h4>
      <div className="img">
        <div className="q1">
          <img src={q1} alt="" />
        </div>
        <div className="q1">
          <img src={q2} alt="" />
        </div>
        <div className="q1">
          <img src={q3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Qzone;