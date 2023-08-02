import { createSlice } from '@reduxjs/toolkit';
// import bookContacts from '../data/bookContacts';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  // JSON.parse(window.localStorage.getItem('contacts')) ??
  // bookContacts.contacts,
  filter: '',
};

const contactsStorageSlice = createSlice({
  name: 'contactsStorage',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      }),
});

export const { setFilter } = contactsStorageSlice.actions;
export const contactsStorageReducer = contactsStorageSlice.reducer;

// export const contactsStorageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contactsStorage/setContacts': {
//       return {
//         ...state,
//         contacts: action.payload,
//       };
//     }
//     case 'contactsStorage/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };
// export const setContacts = payload => {
//   return {
//     type: 'contactsStorage/setContacts',
//     payload,
//   };
// };

// export const setFilter = payload => {
//   return {
//     type: 'contactsStorage/setFilter',
//     payload,
//   };
// };
