import { INCREMENT, DECREMENT } from "./types";

export function increase(value) {
  return {
    type: INCREMENT,
    payload: value + 1,
  };
}

export function decrease(value) {
  return {
    type: DECREMENT,
    payload: value == 0 ? value : value - 1
  };
}
