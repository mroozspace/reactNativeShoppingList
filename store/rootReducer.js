import initialState from './initialState'

const rootReducer = (state = initialState, { type, action }) => {
  switch (type) {

  case 'ADD_SHOPPING_LIST':
    return { ...state, ...action }
  case 'EDIT_SHOPPING_LIST':
    return { ...state, ...action }
  case 'ARCHIVIZE_SHOPPING_LIST':
    return { ...state, ...action }
  case 'ADD_LIST_ITEM':
    return { ...state, ...action }

  default:
    return state
  }
}

export default rootReducer