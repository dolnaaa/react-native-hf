import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM } from "../actionTypes";

const INITIAL_STATE = {
  items: [],
  ids: 1,
};

export default listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        ids: state.ids + 1,
        items: [
          ...state.items,
          {
            ...action.payload,
            id: state.ids,
          },
        ],
      };
    case EDIT_ITEM:
      if (action.id == 0) return state;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == action.payload.id
            ? { id: item.id, ...action.payload.edited_data }
            : item
        ),
      };
    case REMOVE_ITEM:
      if (action.id == 0) return state;
      return {
        ...state,
        items: state.items.filter((x) => x.id != action.id),
      };
    default:
      return state;
  }
};
