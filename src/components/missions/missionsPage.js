import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from './missionList';
import { fetchMissions } from '../../redux/missions/missions';

const MissionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missionReducer);

  return (
    <table className="mission-table">
      <thead>
        <tr>
          <th className="mission-data1">Mission</th>
          <th className="mission-data2">Description</th>
          <th className="mission-data3">status</th>
          <th className="mission-data4">.</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionList
            key={mission.mission_id}
            mission={mission}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionsPage;
