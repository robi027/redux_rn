import { INCREMENTLIST, DECREMENTLIST } from "./types";

export function addList(data, value) {
  data.push({ item: value + 1 })
  return {
    type: INCREMENTLIST,
    payload: data
  }
}

export function removeList(data) {
  data.splice(data.length - 1, 1)
  return {
    type: DECREMENTLIST,
    payload: data
  }
}