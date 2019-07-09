import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import setup from "./src/store/setup";
import Routes from "./src/Routes";

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
console.disableYellowBox = true;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: null
    };
  }

  componentDidMount() {
    setup(store => {
      this.setState({
        isLoading: false,
        store
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={"transparent"} translucent />
          <Routes />
        </View>
      </Provider>
    );
  }
}
