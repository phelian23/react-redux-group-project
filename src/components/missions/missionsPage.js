import React from 'react';
import MissionList from './missionList';

const MissionsPage = () => (
  <table className="mission-table">
    <tr>
      <th className="mission-data1">Mission</th>
      <th className="mission-data2">Description</th>
      <th className="mission-data3">status</th>
      <th className="mission-data4">.</th>
    </tr>
    <MissionList />
  </table>
);

export default MissionsPage;
