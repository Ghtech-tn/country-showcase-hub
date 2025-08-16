// Media service - replace with your backend implementation
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Authorization': `Bearer ${token}`,
  };
};

export const getMedia = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/media`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch media');
    }

    return await response.json();
  } catch (error) {
    console.error('Get media error:', error);
    throw error;
  }
};

export const uploadMedia = async (mediaData: { file: File; title: string; description: string; category: string; year: string }) => {
  try {
    const formData = new FormData();
    formData.append('file', mediaData.file);
    formData.append('title', mediaData.title);
    formData.append('description', mediaData.description);
    formData.append('category', mediaData.category);
    formData.append('year', mediaData.year);

    const response = await fetch(`${API_BASE_URL}/media/upload`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload media');
    }

    return await response.json();
  } catch (error) {
    console.error('Upload media error:', error);
    throw error;
  }
};

export const deleteMedia = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/media/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete media');
    }
  } catch (error) {
    console.error('Delete media error:', error);
    throw error;
  }
};