import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ScreenDimension from "../components/screendimension";
import Intent from "../utilities/intent";

export default GeneralList = (value) => {
  return (
    <TouchableOpacity
      key={value.index}
      style={{ backgroundColor: "red", height: 50, width: ScreenDimension.width() }}
      onPress={() => Intent.detail(value.navigation, value.item.item)}
    >
      <Text>{value.item.item}</Text>
    </TouchableOpacity>
  )
}