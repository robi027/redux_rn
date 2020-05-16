import React, { Component } from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  render() {
    return (
      <View style= {{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="increment"
          onPress={() => this.setState({ counter: this.state.counter += 1})}
        />
        <Text style={{ fontSize: 50 }}>{this.state.counter}</Text>
        <Button
          title="decrement"
          onPress={() => this.setState({ counter: this.state.counter -= 1 })}
        />
      </View>
    );
  }

};

export default Home