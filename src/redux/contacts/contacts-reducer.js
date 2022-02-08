import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { handleFilterChange } from 'redux/contacts/contacts-actions';
import {
  fetchContacts,
  createContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [createContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [handleFilterChange]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
