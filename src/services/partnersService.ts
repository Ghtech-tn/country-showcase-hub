// Partners service - replace with your backend implementation
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getPartners = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch partners');
    }

    return await response.json();
  } catch (error) {
    console.error('Get partners error:', error);
    throw error;
  }
};

export const createPartner = async (partnerData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(partnerData),
    });

    if (!response.ok) {
      throw new Error('Failed to create partner');
    }

    return await response.json();
  } catch (error) {
    console.error('Create partner error:', error);
    throw error;
  }
};

export const updatePartner = async (id: string, partnerData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(partnerData),
    });

    if (!response.ok) {
      throw new Error('Failed to update partner');
    }

    return await response.json();
  } catch (error) {
    console.error('Update partner error:', error);
    throw error;
  }
};

export const deletePartner = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/partners/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete partner');
    }
  } catch (error) {
    console.error('Delete partner error:', error);
    throw error;
  }
};