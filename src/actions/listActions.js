import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "../actionTypes";

export const add_item = (new_data) => {
  return {
    type: ADD_ITEM,
    payload: new_data,
  };
};

export const edit_item = (id, edited_data) => {
  return {
    type: EDIT_ITEM,
    payload: {id, edited_data},
  };
};

export const remove_item = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
