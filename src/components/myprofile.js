import React from 'react';
import { useSelector } from 'react-redux';
import styles from './myprofile.module.css';

const Myprofile = () => {
  // const missionsData = useSelector((state) => state.missions);
  const dragonsData = useSelector((state) => state.dragons);
  return (
    <div className={styles.profile_container}>
      {/* <div className="reserved-rockets">
        <h2>My Missions</h2>
        <ul className="rockets-list">
          {missionsData.map((mission) => {
            if (mission.joined) { return <li key={mission.id}>{mission.mission_name}</li>; }
            return '';
          })}
        </ul>
      </div> */}

      <div className={styles.reserved_dragons}>
        <h2>My Dragons</h2>
        <ul className={styles.dragons_list}>
          {dragonsData.map((dragon) => {
            if (dragon.reserved) {
              return <li key={dragon.id}>{dragon.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default Myprofile;
