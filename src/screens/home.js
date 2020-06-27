import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { increase, decrease } from "../actions/countAction";
import { addList, removeList } from "../actions/listAction";
import { connect } from "react-redux";
import GeneralList from "../components/itemlist";
import Intent from '../utilities/intent';

const { width, height } = Dimensions.get("screen")
class Home extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ flex: 1 }}>
            <Button
              title="Animation"
              onPress={() => Intent.animate(this.props.navigation)}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Button
              title="increment"
              onPress={() => {
                this.props.increase(this.props.count)
                this.props.addList(this.props.list, this.props.count)
              }}
            />
            <Text style={{ fontSize: 50, textAlign: "center" }}>{this.props.count}</Text>
            <Button
              title="decrement"
              onPress={() => {
                this.props.decrease(this.props.count)
                this.props.removeList(this.props.list)
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Chat"
              onPress={() => Intent.chat(this.props.navigation)}
            />
          </View>
        </View>
        <FlatList
          data={this.props.list}
          extraData={this.props.list}
          renderItem={({ index, item }) => <GeneralList index={index} item={item} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* <View style={{ position: "absolute", alignItems: "center", flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.6)" }}>
          <ActivityIndicator
            size={100}
            color={"#000"}
          />
        </View> */}
      </SafeAreaView>
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