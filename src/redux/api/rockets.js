/* eslint-disable consistent-return */
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getRockets;
