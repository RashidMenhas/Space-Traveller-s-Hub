import React from 'react';
import { useSelector } from 'react-redux';
import './myprofile.css';

const Myprofile = () => {
  const rocketsData = useSelector((state) => state.rockets);
  return (
    <div className="profile-container">
      <div>
        <h2>My Rockets</h2>
        <ul className="table1">
          {rocketsData.map((rocket) => {
            console.log(rocketsData);
            if (rocket.reserved) {
              return <li className="data" key={rocket.id}>{rocket.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default Myprofile;
