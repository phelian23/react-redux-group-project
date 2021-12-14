import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from './missionList';
import { fetchMissions } from '../../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missions = useSelector((state) => state.missionReducer);

  return (
    <table className="mission-table">
      <tr>
        <th className="mission-data1">Mission</th>
        <th className="mission-data2">Description</th>
        <th className="mission-data3">status</th>
        <th className="mission-data4">.</th>
      </tr>
      {missions.map((mission) => (
        <MissionList
          key={mission.mission_id}
          mission={mission}
        />
      ))}
    </table>
  );
};

export default MissionsPage;
