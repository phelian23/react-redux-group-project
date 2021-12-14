<<<<<<< HEAD
import getMissions from '../../components/missions/missionsApi';

const FETCH_MISSIONS = 'spaceHub/missions/FETCH_MISSIONS';

const initialState = [];

const extractMissions = (data) => {
  const missions = [];

  data.forEach((obj) => {
    const mission = {
      mission_id: obj.mission_id,
      mission_name: obj.mission_name,
      description: obj.description,
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

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, ...action.payload];

=======
const SUCCESS_MISSION = 'SUCCESS_MISSION';

const initialState = [];

export const successMission = (payload) => ({
  type: SUCCESS_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MISSION: {
      return Object.keys(action.payload).map((key) => ({
        id: key,
      }));
    }
>>>>>>> rockets-fetch
    default:
      return state;
  }
};

<<<<<<< HEAD
export default missionReducer;
=======
export default reducer;
>>>>>>> rockets-fetch
