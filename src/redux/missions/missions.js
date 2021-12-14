import getMissions from '../../components/missions/missionsApi';

const FETCH_MISSIONS = 'spaceHub/missions/FETCH_MISSIONS';
const JOIN_MISSIONS = 'spaceHub/missions/JOIN_MISSIONS';

const initialState = [];

const extractMissions = (data) => {
  const missions = [];

  data.forEach((obj) => {
    const mission = {
      mission_id: obj.mission_id,
      mission_name: obj.mission_name,
      description: obj.description,
      join: false,
    };
    missions[missions.length] = mission;
    return missions;
  });
  return missions;
};

export const fetchMissions = () => async (dispatch) => {
  try {
    const data = await getMissions();

    dispatch({ type: FETCH_MISSIONS, payload: extractMissions(data) });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const joinMissions = (id) => ({ type: JOIN_MISSIONS, payload: id });

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, ...action.payload];

    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            join: !mission.join,
          };
        } return mission;
      });

    default:
      return state;
  }
};

export default missionReducer;
