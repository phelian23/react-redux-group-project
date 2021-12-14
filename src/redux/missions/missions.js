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
    default:
      return state;
  }
};

export default reducer;
