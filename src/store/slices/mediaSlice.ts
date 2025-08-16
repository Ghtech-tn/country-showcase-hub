import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as mediaService from '@/services/mediaService';

interface MediaItem {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'photo' | 'video';
  category: string;
  year: string;
  thumbnail?: string;
  duration?: string;
}

interface MediaState {
  photos: MediaItem[];
  videos: MediaItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MediaState = {
  photos: [],
  videos: [],
  loading: false,
  error: null,
};

export const fetchMedia = createAsyncThunk('media/fetchMedia', async () => {
  return await mediaService.getMedia();
});

export const uploadMedia = createAsyncThunk(
  'media/uploadMedia',
  async (mediaData: { file: File; title: string; description: string; category: string; year: string }) => {
    return await mediaService.uploadMedia(mediaData);
  }
);

export const deleteMedia = createAsyncThunk(
  'media/deleteMedia',
  async (id: string) => {
    await mediaService.deleteMedia(id);
    return id;
  }
);

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload.filter((item: MediaItem) => item.type === 'photo');
        state.videos = action.payload.filter((item: MediaItem) => item.type === 'video');
      })
      .addCase(fetchMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch media';
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        if (action.payload.type === 'photo') {
          state.photos.push(action.payload);
        } else {
          state.videos.push(action.payload);
        }
      })
      .addCase(deleteMedia.fulfilled, (state, action) => {
        state.photos = state.photos.filter(item => item.id !== action.payload);
        state.videos = state.videos.filter(item => item.id !== action.payload);
      });
  },
});

export default mediaSlice.reducer;