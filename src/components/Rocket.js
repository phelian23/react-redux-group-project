import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import { reserve } from '../redux/rockets/rockesSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    name, image, description, id, reserved,
  } = props;
  Rocket.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.string.isRequired,
  };
  const manageReservation = () => {
    dispatch(reserve(id));
  };

  return (
    <div className="d-flex my-4">
      <img src={image} alt={name} className="w-25 p-1" />
      <div className="w-75 p-2">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="d-flex">
          <button type="button" className="btn btn-primary" onClick={manageReservation}>{reserved === 'true' ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          {reserved === 'true' ? <p className="mx-4 my-auto bg-danger p-1 text-light"> Reserved </p> : <p> </p>}
        </div>
      </div>
    </div>
  );
};

export default Rocket;
