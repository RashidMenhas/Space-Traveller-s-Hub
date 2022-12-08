const baseurl = 'https://api.spacexdata.com/v3/rockets';

const fetchdata = async () => {
  const response = await fetch(baseurl);
  const data = await response.json();
  return data;
};

export default fetchdata;
