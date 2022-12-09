import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Rockets from '../pages/Rockets';
import Missions from './missions';
import Myprofile from './myprofile';
import Dragons from './dragons';
import Logo from '../images/planet.png';
import './navbar.css';

const Navbar = () => (
  <Router>
    <div>
      <nav className="navbar">

        <div className="logo">
          <img className="logoImg" src={Logo} alt="logo" />
          <h1 className="logo-text">Space Travelers&apos; Hub</h1>
        </div>
        <div className="ul-list">
          <ul className="ul">
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="rockets"
                to="/"
              >
                Rockets
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="missions"
                to="missions"
              >
                Missions
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="Dragonss"
                to="Dragons"

              >
                Dragons
              </Link>
            </li>
            <div className="vertical-line" />
            <li>
              <Link
                style={{ textDecoration: 'none' }}
                className="dragons"
                to="profile"
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="horizental-line" />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="Dragons" element={<Dragons />} />
        <Route path="profile" element={<Myprofile />} />
      </Routes>
    </div>
  </Router>
);

export default Navbar;
