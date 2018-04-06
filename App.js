import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import marvelApp from './app/reducers'
import { StackNavigator } from 'react-navigation';

import HomeContainer from "./app/containers/Home";
import SearchContainer from "./app/containers/Search";

let store = createStore(marvelApp, applyMiddleware(thunk))

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeContainer
    },
    Search: {
      screen: SearchContainer
    }
  },
  {
    initialRouteName: 'Search'
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
