import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Animated, Easing, StyleSheet } from "react-native";
import Images from "../configs/images";
import Fonts from "../configs/fonts"
import Colors from "../configs/colors";
import { increase, decrease, clear } from "../actions/countAction";
import { connect } from "react-redux";
import ScreenDimension from "../components/screendimension";

class Detail extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(1)
  }

  componentDidMount() {
    this._spin()
  }

  _spin() {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this._spin())
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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

        {this.renderAnimation()}
      </View>
    )
  }

  renderAnimation() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '170deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScreenDimension.height() - 200,
    width: ScreenDimension.width()
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#26a267',
  },
});

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