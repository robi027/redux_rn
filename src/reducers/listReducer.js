import { INCREMENTLIST, DECREMENTLIST } from "../actions/types";
let initialValue = []

const listReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENTLIST:
      return action.payload
    case DECREMENTLIST:
      return action.payload
    default:
      return state
  }
}

export default listReducer