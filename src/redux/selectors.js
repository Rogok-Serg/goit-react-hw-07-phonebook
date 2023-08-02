export const selectContacts = state => state.contactsStorage.contacts.items;
export const selectIsLoading = state =>
  state.contactsStorage.contacts.isLoading;
export const selectError = state => state.contactsStorage.contacts.error;
export const selectFilter = state => state.contactsStorage.filter;
