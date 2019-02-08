import initialState from './initialState';

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_SHOPPING_LIST':
      let id = state.shoppingList[state.shoppingList.length - 1].id + 1;
      let newList = state.shoppingList.concat({
        id,
        createdAt: Date.now(),
        ...payload
      });
      return {
        ...state,
        shoppingList: newList
      };
    case 'EDIT_SHOPPING_LIST':
      filteredList = state.shoppingList.filter( item => item.id !== payload.id)
      let updatedList = filteredList.concat({...payload})
      return {
        ...state,
        shoppingList: updatedList
      };
    case 'ARCHIVE_SHOPPING_LIST':
      let filteredList = state.shoppingList.filter( item => item.id !== payload.id)
      let archived = state.archived.concat(payload)
      return {
        ...state,
        shoppingList: filteredList,
        archived
      };

    default:
      return state;
  }
};

export default rootReducer;
