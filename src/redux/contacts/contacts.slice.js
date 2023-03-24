import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteSelectedContact,
  fetchContactsThunk,
} from './contacts.thunk';

const initialContactsState = {
  isPending: false,
  error: null,
  list: [],
};

const handlePendingState = (state, action) => {
  state.isPending = true;
};

const handleRejectionState = (state, action) => {
  state.isPending = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,

  extraReducers: {
    [fetchContactsThunk.pending]: handlePendingState,
    [deleteSelectedContact.pending]: handlePendingState,
    [addNewContact.pending]: handlePendingState,
    [fetchContactsThunk.rejected]: handleRejectionState,
    [deleteSelectedContact.rejected]: handleRejectionState,
    [addNewContact.rejected]: handleRejectionState,
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.isPending = false;
      state.list.push(...action.payload);
    },

    [deleteSelectedContact.fulfilled]: (state, action) => {
      state.isPending = false;
      const index = state.list.findIndex(
        contacts => contacts.id === action.payload
      );
      state.list.splice(index, 1);
    },

    [addNewContact.fulfilled]: (state, action) => {
      state.isPending = false;
      state.list.push(action.payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;
export { contactsReducer };

