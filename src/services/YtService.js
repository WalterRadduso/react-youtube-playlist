import axios from 'axios';
import { API_KEY, API_URL } from '../config';

const configHeaders = {
  'Content-Type': 'application/json',
};

export default {
  getVideos: async function (querySearch = null) {
    const config = {
      headers: configHeaders,
      params: {
        key: API_KEY,
        maxResults: 10,
        order: 'date',
        part: 'snippet',
        relevanceLanguage: 'en',
        ...(querySearch && { q: querySearch }),
      },
    };

    try {
      const { data } = await axios.get(`${API_URL}/search`, config);

      return data;
    } catch (error) {
      throw error;
    }
  },
};
