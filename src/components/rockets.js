import React from 'react';
import Logo from '../images/planet.png';
import './rockets.css';

const Rockets = () => (
  <div className="parent-container">
    <div className="container">
      <div className="image-container">
        <img className="card-image" src={Logo} alt="logo" />
      </div>
      <div className="list">
        <h3>Rashid menhas</h3>
        <p>
          <button type="button" className="reserved">Reserved</button>
          {' '}
          The Rockets section displays a list of all available SpaceX rockets.
          Users can book each rocket by clicking the reservation
          button or cancel the previously made booking. The same layout is
          used to form the Dragons section
          {' '}
        </p>
        <div>
          <button type="button" className="reserve-rocket">Reserve Rocket</button>
          <button type="button" className="cancel-reserve">Cancel Reservation</button>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="image-container">
        <img className="card-image" src={Logo} alt="logo" />
      </div>
      <div className="list">
        <h3>Rashid menhas</h3>
        <p>
          <button type="button" className="reserved">Reserved</button>
          {' '}
          The Rockets section displays a list of all available SpaceX rockets.
          Users can book each rocket by clicking the reservation
          button or cancel the previously made booking. The same layout is
          used to form the Dragons section
          {' '}
        </p>
        <div>
          <button type="button" className="reserve-rocket">Reserve Rocket</button>
          <button type="button" className="cancel-reserve">Cancel Reservation</button>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="image-container">
        <img className="card-image" src={Logo} alt="logo" />
      </div>
      <div className="list">
        <h3>Rashid menhas</h3>
        <p>
          <button type="button" className="reserved">Reserved</button>
          {' '}
          The Rockets section displays a list of all available SpaceX rockets.
          Users can book each rocket by clicking the reservation
          button or cancel the previously made booking. The same layout is
          used to form the Dragons section
          {' '}
        </p>
        <div>
          <button type="button" className="reserve-rocket">Reserve Rocket</button>
          <button type="button" className="cancel-reserve">Cancel Reservation</button>
        </div>
      </div>
    </div>
  </div>
);
export default Rockets;
