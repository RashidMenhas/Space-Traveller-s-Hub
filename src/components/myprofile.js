import React from 'react';
import { useSelector } from 'react-redux';
import './myprofile.css';

const Myprofile = () => {
  const missionsData = useSelector((state) => state.missions);

  return (
    <div>
      <div className="container">
        <h2 className="Mymish">My Missions</h2>
        <ul className="containers">
          {missionsData.map((mission) => {
            if (mission.reserved) {
              return <li className="missionList" key={mission.id}>{mission.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default Myprofile;
