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

class Home extends Component {

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
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

        <FlatList
          data={this.props.list}
          extraData={this.props.list}
          renderItem={({ index, item }) => <GeneralList index={index} item={item} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
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