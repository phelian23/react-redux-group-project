/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const MissionList = ({ mission }) => {
  const { mission_id, mission_name, description } = mission;

  return (
    <tr>
      <th>{mission_name}</th>
      <td>{description}</td>
      <td><p>Not a member</p></td>
      <td><button type="button" itemID={mission_id}>Join Mission</button></td>
    </tr>
  );
};

MissionList.propTypes = {
  mission: PropTypes.shape(
    {
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MissionList;
