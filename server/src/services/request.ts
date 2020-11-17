import axios from 'axios';

export const getGithubData = async (keyword: string, type: string) => {
  return await axios.get(`https://api.github.com/search/${type}?q=${keyword}`);
};
