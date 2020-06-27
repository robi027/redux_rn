import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Animated, Easing, StyleSheet } from "react-native";
import Images from "../configs/images";
import Fonts from "../configs/fonts"
import Colors from "../configs/colors";
import ScreenDimension from "../components/screendimension";

export default class Animate extends Component {
  constructor() {
    super();
    this.timingValue = new Animated.Value(0)
    this.springValue = new Animated.Value(1)
    this.decayValue = new Animated.Value(-150)
  }

  componentDidMount() {
    this._timing()
    this._spring()
    this._decay()
  }

  _decay() {
    Animated.decay(this.decayValue, {
      toValue: 200,
      duration: 2000,
      velocity: 0.95,
      deceleration: 0.998,
      useNativeDriver: true
    }).start()
  }

  _spring() {
    this.springValue.setValue(1)
    Animated.spring(this.springValue, {
      toValue: 1.25,
      friction: 0.1,
      tension: 100,
      useNativeDriver: true
    }).start()
  }

  _timing() {
    this.timingValue.setValue(0)
    Animated.timing(this.timingValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => this._timing())
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 10 }}>
        <View>
          <Text>
            Timing
          </Text>
          {this.renderTiming()}
        </View>
        <View>
          <Text>
            Spring
          </Text>
          {this.renderSpring()}
        </View>
        <View>
          <Text>
            Decay
          </Text>
          {this.renderDecay()}
        </View>
      </View>
    )
  }

  renderDecay() {
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: this.decayValue }] }]}>
      </Animated.View>
    )
  }

  renderSpring() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ scale: this.springValue }] }}>
          <View style={styles.box} />
        </Animated.View>
      </View>

    )
  }

  renderTiming() {
    const timing = this.timingValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '170deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ rotate: timing }] }}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#26a267',
  },
});