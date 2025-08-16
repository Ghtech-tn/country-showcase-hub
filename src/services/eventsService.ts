// Events service - replace with your backend implementation
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    return await response.json();
  } catch (error) {
    console.error('Get events error:', error);
    throw error;
  }
};

export const createEvent = async (eventData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Failed to create event');
    }

    return await response.json();
  } catch (error) {
    console.error('Create event error:', error);
    throw error;
  }
};

export const updateEvent = async (id: string, eventData: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Failed to update event');
    }

    return await response.json();
  } catch (error) {
    console.error('Update event error:', error);
    throw error;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  } catch (error) {
    console.error('Delete event error:', error);
    throw error;
  }
};