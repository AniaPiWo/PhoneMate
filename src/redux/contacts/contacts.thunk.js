import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios.defaults.baseURL = 'https://640b422d81d8a32198df1101.mockapi.io/';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
   const { contacts } = thunkAPI.getState()
    if(contacts?.list.length !== 0) return []  
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteSelectedContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone }, thunkAPI) => {
    try {
      const response  = await axios.post('/contacts', {name, phone });
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async ({id , name, phone }, thunkAPI) => {
    try {
      const contact = {
        id, name, phone 
      };
      await axios.patch('/contacts', contact);
      return {
        id,
        name,
        phone,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
 