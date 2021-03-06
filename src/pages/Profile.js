import React from 'react';
import { useSelector } from 'react-redux';
import RocketProfile from '../components/RocketsProfile';

const Profile = () => {
  const allMissions = useSelector((state) => state.missionReducer);
  const missions = allMissions.filter((mission) => mission.join === true);

  return (
    <main className="container">
      <section className="row align-top p-2">
        <div className="col-6">
          <h3>My Missions</h3>
          <ul className="profile-list">
            {missions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <div className="row align-top p-2">
            <div className="col">
              <RocketProfile />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
