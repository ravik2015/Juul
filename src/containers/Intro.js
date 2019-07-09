import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4, justifyContent: "center" }}>
          <Text style={{ fontSize: 44, marginLeft: 20 }}>
            Congrats on {"\n"}taking the {"\n"}first step to {"\n"}
            <Text style={{ fontWeight: "bold" }}>QUIT JUUL</Text>
          </Text>
        </View>
        <View
          style={{ flex: 0.4, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/pack.png")}
            style={{ flex: 0.9 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={Actions.AccountInfo} style={styles.button}>
            <Text style={{ color: "white" }}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  button: {
    height: "40%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#27E68D",
    alignItems: "center",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Intro);
