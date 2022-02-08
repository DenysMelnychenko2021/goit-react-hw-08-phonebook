import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  },
);
