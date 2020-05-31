import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  FlatList
} from 'react-native';
import { increase, decrease } from "../actions/countAction";
import { addList, removeList } from "../actions/listAction";
import { connect } from "react-redux";
import GeneralList from "../components/itemlist";
import intent from '../utilities/intent';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Button
              title="Animation"
              onPress={() => intent.animate(this.props.navigation)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Button
                title="increment"
                onPress={() => {
                  this.props.increase(this.props.count)
                  this.props.addList(this.props.list, this.props.count)
                }}
              />
              <Text style={{ fontSize: 50 }}>{this.props.count}</Text>
              <Button
                title="decrement"
                onPress={() => {
                  this.props.decrease(this.props.count)
                  this.props.removeList(this.props.list)
                }}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>

          </View>
        </View>
        <View>
          <FlatList
            data={this.props.list}
            extraData={this.props.list}
            renderItem={({ index, item }) => <GeneralList index={index} item={item} navigation={this.props.navigation} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    count: state.countReducer,
    list: state.listReducer
  }
}

const mapDispatchToProps = {
  increase,
  decrease,
  addList,
  removeList
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)