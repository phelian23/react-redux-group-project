import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const missions = allMissions.filter((mission) => mission.join === true);

  return (
    <main className="container">
      <section className="row">
        <div className="col-6">
          <h3>My Missions</h3>
          <ul>
            {missions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h3>My Rockets</h3>
        </div>
      </section>
    </main>
  );
};

export default Profile;
