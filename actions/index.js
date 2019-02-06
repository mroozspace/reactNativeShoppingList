export const addShoppingList = payload => {
  return {
  type: 'ADD_SHOPPING_LIST',
  payload
}}
export const editShoppingList = payload => ({
  type: 'EDIT_SHOPPING_LIST',
  payload
})
export const archiveShoppingList = payload => ({
  type: 'ARCHIVE_SHOPPING_LIST',
  payload
})