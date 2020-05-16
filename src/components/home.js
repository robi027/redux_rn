import React, { Component } from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import { increase, decrease } from "../actions/count";
import { connect } from "react-redux";

class Home extends Component {

  render() {
    return (
      <View style= {{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="increment"
          onPress={() => this.props.increase(this.props.counter)}
        />
        <Text style={{ fontSize: 50 }}>{this.props.counter}</Text>
        <Button
          title="decrement"
          onPress={() => this.props.decrease(this.props.counter)}
        />
      </View>
    );
  }
};

function mapStateToProps(state){
  return{
    counter: state.countReducer
  }
}

const mapDispatchToProps = {
  increase,
  decrease
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)