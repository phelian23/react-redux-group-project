/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockesSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.entities);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default Rockets;
