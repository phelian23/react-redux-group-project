import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../planet.svg';

const Header = () => (
  <div className="container">
    <div className="row d-flex justify-content-start">
      <div className="col-6">
        <img src={planet} alt="" className="logoImg" />
        Space Travellers&apos; Hub
      </div>
      <div className="col text-end links">
        <Link className="links" to="/">Rockets</Link>
      </div>
      <div className="col text-end links">
        <Link className="links" to="/">Missions</Link>
      </div>
      <div className="col text-end links spacer">
        <Link className="links" to="/categories">My Profile</Link>
      </div>
    </div>
  </div>
);

export default Header;
