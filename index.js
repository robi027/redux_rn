/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/screens/home';
import {name as appName} from './app.json';

import React from 'react';
import reducers from './src/reducers'
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers)

const AppContainer = () => {
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => AppContainer);
