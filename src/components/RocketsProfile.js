import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rockets.entities);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === 'true');
  const renderReservedRockets = () => reservedRockets.map((rocket) => (
    <tr key={rocket.id}>
      <th>
        {rocket.name}
      </th>
    </tr>
  ));
  return (
    <div>
      <h1>My Rockets</h1>
      <table className="table table-hover border border-solid">
        <tbody>
          {renderReservedRockets()}
        </tbody>
      </table>
    </div>
  );
};

export default RocketProfile;
