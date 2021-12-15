import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockesSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.entities);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  const renderRockets = (rocketCollection) => rocketCollection.map((rocketInfo) => (
    <Rocket
      key={rocketInfo.id}
      id={rocketInfo.id}
      name={rocketInfo.name}
      image={rocketInfo.images[0]}
      description={rocketInfo.description}
      reserved={rocketInfo.reserved}
    />
  ));

  return (
    <div>
      {renderRockets(rockets)}
    </div>
  );
};

export default Rockets;
