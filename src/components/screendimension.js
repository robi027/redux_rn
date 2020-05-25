import { Dimensions } from "react-native";

export default class ScreenDimension {
  static height() {
    return Dimensions.get("window").height
  }

  static width() {
    return Dimensions.get("window").width
  }
}