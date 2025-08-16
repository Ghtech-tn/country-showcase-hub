import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as partnersService from '@/services/partnersService';

interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

interface PartnersState {
  partners: Partner[];
  loading: boolean;
  error: string | null;
}

const initialState: PartnersState = {
  partners: [],
  loading: false,
  error: null,
};

export const fetchPartners = createAsyncThunk('partners/fetchPartners', async () => {
  return await partnersService.getPartners();
});

export const createPartner = createAsyncThunk(
  'partners/createPartner',
  async (partnerData: Omit<Partner, 'id'>) => {
    return await partnersService.createPartner(partnerData);
  }
);

export const updatePartner = createAsyncThunk(
  'partners/updatePartner',
  async ({ id, partnerData }: { id: string; partnerData: Partial<Partner> }) => {
    return await partnersService.updatePartner(id, partnerData);
  }
);

export const deletePartner = createAsyncThunk(
  'partners/deletePartner',
  async (id: string) => {
    await partnersService.deletePartner(id);
    return id;
  }
);

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload;
      })
      .addCase(fetchPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch partners';
      })
      .addCase(createPartner.fulfilled, (state, action) => {
        state.partners.push(action.payload);
      })
      .addCase(updatePartner.fulfilled, (state, action) => {
        const index = state.partners.findIndex(partner => partner.id === action.payload.id);
        if (index !== -1) {
          state.partners[index] = action.payload;
        }
      })
      .addCase(deletePartner.fulfilled, (state, action) => {
        state.partners = state.partners.filter(partner => partner.id !== action.payload);
      });
  },
});

export default partnersSlice.reducer;