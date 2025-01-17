import axios from 'axios';

export const getAllUser = async (page = 1, limit = 10, search = '') => {
    try {
      const response = await axios.get('http://localhost:9000/api/users/all', {
        params: { page, limit, search },
      });
      return response.data; // Return the API response
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Re-throw the error for handling in the calling component
    }
  };