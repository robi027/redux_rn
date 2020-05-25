import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default GeneralList = (value) => {
  return (
    <TouchableOpacity
      key={value.index}
      style={{ backgroundColor: "red", height: 50 }}
    >
      <Text>{value.item.item}</Text>
    </TouchableOpacity>
  )
}