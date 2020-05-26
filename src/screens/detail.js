import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Images from "../configs/images";
import Fonts from "../configs/fonts"
import Colors from "../configs/colors";
import { increase, decrease, clear } from "../actions/countAction";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
          <TouchableOpacity
            style={{ backgroundColor: Colors.blueSky, padding: 10 }}
            onPress={() => this.props.increase(this.props.count)}
          >
            <Image
              source={Images.addIcon}
              style={{ height: 25, width: 25, tintColor: Colors.white }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 50, fontFamily: Fonts.regular, }} >{this.props.route.params.data}</Text>
          <Text style={{ fontSize: 50, fontFamily: Fonts.regular, }} >{this.props.count}</Text>
          <TouchableOpacity
            style={{ backgroundColor: Colors.blueSky, padding: 10 }}
            onPress={() => this.props.decrease(this.props.count)}
          >
            <Image
              source={Images.removeIcon}
              style={{ height: 25, width: 25, tintColor: Colors.white }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: Colors.blueSky, padding: 10, alignItems: "center" }}
          // onPress={() => this.props.clear()}
        >
          <Text style={{ fontFamily: Fonts.regular, color: Colors.white }}>Clear</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.countReducer
  }
}

const mapDispatchToProps = {
  increase,
  decrease,
  clear
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)