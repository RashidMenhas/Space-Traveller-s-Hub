import React from 'react';
import { useSelector } from 'react-redux';
import './myprofile.css';
import styles from './myprofile.module.css';

const Myprofile = () => {
  // const missionsData = useSelector((state) => state.missions);
  const dragonsData = useSelector((state) => state.dragons);
  const rocketsData = useSelector((state) => state.rockets);

  return (
    <div className={styles.profile_container}>
      <div className="rocket-contain">
        <h2>My Rockets</h2>
        <ul className="table1">
          {rocketsData.map((rocket) => {
            if (rocket.reserved) {
              return <li className="data" key={rocket.id}>{rocket.name}</li>;
            }
            return '';
          })}
        </ul>
      </div>

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
