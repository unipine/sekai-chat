const initialState = {
  items: [],
  loading: false,
  error: null
}

export const itemReducerCreator = ({add_item, item_loading, item_error, item_loaded}) => (state = initialState, action) => {


  switch (action.type) {
    case add_item:
      return {
        ...state,
        items: [...state.items, action.item]
      }

    case item_loading:
      return {
        ...state,
        loading: true
      }
    case item_error:
      return {
        ...state,
        error: action.error
      }
    case item_loaded:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }

}
