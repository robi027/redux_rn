import React, { Component } from "react";
import { Text } from "react-native";

class Detail extends Component {
  render() {
    return (
      <Text>{this.props.route.params.data}</Text>
    )
  }
}

export default Detail