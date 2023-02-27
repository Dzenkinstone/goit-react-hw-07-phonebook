export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectState = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilterValue(state);
  const normalazedFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );
};
