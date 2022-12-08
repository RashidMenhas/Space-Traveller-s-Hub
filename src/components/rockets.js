import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './rockets.css';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const selector = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      {selector.map((rocket) => (
        <div className="parent-container" key={rocket.id}>
          <div className="container">
            <div className="image-container">
              <img className="card-image" src={rocket.flickr_images} alt="logo" />
            </div>
            <div className="list">
              <h3>{rocket.rocket_name}</h3>
              <p>
                <button type="button" className="reserved">
                  Reserved
                </button>
                {rocket.description}
              </p>
              <div>
                <button type="button" className="reserve-rocket">
                  Reserve Rocket
                </button>
                <button type="button" className="cancel-reserve">
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Rockets;
