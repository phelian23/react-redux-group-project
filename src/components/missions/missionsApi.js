const baseUrl = 'https://api.spacexdata.com/v3/missions';

const getMissions = async () => {
  try {
    const response = await fetch(baseUrl);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getMissions;
