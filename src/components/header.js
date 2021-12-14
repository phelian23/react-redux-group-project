import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../planet.svg';

const Header = () => (
  <div className="container">
    <div className="row d-flex justify-content-start">
      <div className="col-6">
        <img src={planet} alt="" className="logoImg" />
        Space Travellers&apos; Hub
      </div>
      <div className="col text-end links">
        <NavLink className="links" to="/" exact="true" activeClassName="active-link">Rockets</NavLink>
      </div>
      <div className="col text-end links">
        <NavLink className="links" to="/missions" activeClassName="active-link">Missions</NavLink>
      </div>
      <div className="col text-end links spacer">
        <NavLink className="links" to="/profile" activeClassName="active-link">My Profile</NavLink>
      </div>
    </div>
  </div>
);

export default Header;
