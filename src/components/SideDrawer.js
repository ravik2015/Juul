import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return <View style={{ flex: 1 }} />;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(SideDrawer);
