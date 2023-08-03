import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64c907c2b2980cec85c1c78c.mockapi.io';
const endpoint = '/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thankApi) => {
    try {
      const { data } = await axios.get(endpoint);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thankApi) => {
    try {
      const { data } = await axios.post(endpoint, contacts);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thankApi) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${taskId}`);
      return data;
    } catch (error) {
      return thankApi.rejectWithValue(error.message);
    }
  }
);
