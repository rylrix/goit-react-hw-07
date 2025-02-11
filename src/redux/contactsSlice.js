import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: {
    items: [],
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const contactWithId = { ...action.payload, id: nanoid() };
      state.contacts.items.push(contactWithId);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;

export const selectContacts = (state) => state.contacts.contacts.items;
