export const signupUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:9000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }
  
      return data;
    } catch (error) {
      throw new Error(error.message || 'An error occurred while signing up');
    }
  };
  