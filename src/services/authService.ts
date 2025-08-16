// Auth service - replace with your backend implementation
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    
    // Store token in localStorage
    if (data.token) {
      localStorage.setItem('authToken', data.token);
    }

    return data.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    localStorage.removeItem('authToken');
  } catch (error) {
    console.error('Logout error:', error);
    // Still remove token even if API call fails
    localStorage.removeItem('authToken');
  }
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return null;
    }

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      localStorage.removeItem('authToken');
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Get current user error:', error);
    localStorage.removeItem('authToken');
    return null;
  }
};