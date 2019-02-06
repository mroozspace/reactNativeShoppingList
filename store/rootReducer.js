import initialState from './initialState';

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_SHOPPING_LIST':
      const id = state.shoppingList[state.shoppingList.length - 1].id + 1;
      const newList = state.shoppingList.concat({
        id,
        createdAt: Date.now(),
        ...payload
      });
      return {
        ...state,
        shoppingList: newList
      };
    case 'EDIT_SHOPPING_LIST':
      const filteredList = state.shoppingList.filter( product => product.id !== payload.id)
      const updatedList = filteredList.concat({...payload})
      return {
        ...state,
        shoppingList: updatedList
      };
    case 'ARCHIVE_SHOPPING_LIST':
      console.log('ARCHIVE_SHOPPING_LIST');

      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default rootReducer;