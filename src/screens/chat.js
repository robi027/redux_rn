import React, { Component } from "react";
import { View, SafeAreaView, Text } from "react-native";
import Pusher from "pusher-js/react-native";
Pusher.logToConsole = true;
export default class Chat extends Component {

  componentDidMount() {
    const pusher = new Pusher("67fae51be58381d254e2", { cluster: "ap1" })
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      console.log("Rene");
      console.log(data);
      alert(JSON.stringify(data));
    });
    
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Robi</Text>
        </View>
      </SafeAreaView>
    )
  }

}