/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMissions } from '../../redux/missions/missions';

const MissionList = ({ mission }) => {
  const dispatch = useDispatch();
  const {
    mission_id, mission_name, description, join,
  } = mission;

  const joinMode = {};

  if (join) {
    joinMode.button = 'Leave Mission';
    joinMode.status = 'Active Member';
  } else {
    joinMode.button = 'Join Mission';
    joinMode.status = 'Not A Member';
  }

  const joinedBtnStyle = {
    color: 'red',
    border: '1px solid red',
  };

  const joinStatusStyle = {
    backgroundColor: '#0290ff',
  };

  return (
    <tr>
      <th>{mission_name}</th>
      <td>{description}</td>
      <td><p style={join ? joinStatusStyle : null}>{joinMode.status}</p></td>
      <td><button style={join ? joinedBtnStyle : null} type="button" onClick={() => dispatch(joinMissions(mission_id))}>{joinMode.button}</button></td>
    </tr>
  );
};

MissionList.propTypes = {
  mission: PropTypes.shape(
    {
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      join: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default MissionList;
