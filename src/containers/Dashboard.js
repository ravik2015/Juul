import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Graph } from "../components/graph";

const data = [
  { title: "DAYS", value: "23" },
  { title: "HRS", value: "12" },
  { title: "MINS", value: "16" },
  { title: "SECS", value: "03" }
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  view = () => {
    return data.map((item, index) => (
      <View
        style={{
          flex: 1 / 4,
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "bold",
            color: "#000000"
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#27E68D"
          }}
        >
          {item.value}
          {index === data.length - 1 ? "" : ":"}
        </Text>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.15, justifyContent: "center" }}>
          <Text style={{ fontSize: 38, fontWeight: "bold" }}>PROGRESS</Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flex: 0.48 }}>
              <Text style={styles.cardText}>DAYS SOBER</Text>
              <View style={styles.detailsBox}>
                <View style={{ flex: 0.3, justifyContent: "center" }}>
                  <Ionicons name="ios-sunny" size={30} color="#c2fce1" />
                </View>
                <View
                  style={{
                    flex: 0.7,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 54,
                      fontWeight: "bold",
                      color: "#27E68D"
                    }}
                  >
                    24
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 0.48 }}>
              <Text style={styles.cardText}>DAYS OF LIFE SAVED</Text>
              <View style={styles.detailsBox}>
                <View style={{ flex: 0.3, justifyContent: "center" }}>
                  <FontAwesome name="hourglass-o" size={20} color="#c2fce1" />
                </View>
                <View
                  style={{
                    flex: 0.7,
                    flexDirection: "row",
                    paddingTop: 20
                  }}
                >
                  {this.view()}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.1 }} />
        <View style={{ flex: 0.35 }}>
          <Graph />
        </View>
        <View style={{ flex: 0.1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 20 },
  detailsBox: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5
  },
  cardText: {
    fontSize: 12,
    padding: 10,
    fontWeight: "bold",
    color: "#B2B2B2"
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
