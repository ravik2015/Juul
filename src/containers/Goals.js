import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Modal,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//vector icons
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { months } from "../constants/jsonData";

const { height } = Dimensions.get("window");

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      month: "Select",
      monthModal: false
    };
  }
  componentWillMount() {}

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ height: height * 0.15, justifyContent: "center" }}>
          <Text style={{ fontSize: 38, fontWeight: "bold" }}>GOALS</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
            When do you want to be clean by?
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({ monthModal: true })}
            style={styles.input}
          >
            <View
              style={{
                flex: 0.175,
                alignItems: "center"
              }}
            >
              <FontAwesome name="calendar-check-o" color="#24d88d" size={25} />
            </View>
            <View style={{ flex: 0.725 }}>
              <Text style={{ fontSize: 16, color: "grey" }} numberOfLines={1}>
                {this.state.month}
              </Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <AntDesign name="caretdown" color="#24d88d" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ marginVertical: 10, fontWeight: "bold" }}>
            Why are you quitting?
          </Text>
          <View style={styles.input}>
            <View style={{ flex: 0.1 }}>
              <MaterialIcons name="message" color="#24d88d" size={30} />
            </View>
            <TextInput
              placeholder="Tell us about it here so we can show you later."
              multiline
              maxLength={100}
              style={styles.textInput}
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
          </View>
        </View>
        <View
          style={{
            height: height * 0.2,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity onPress={Actions.dashboard} style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
        <Modal visible={this.state.monthModal} animationType="slide">
          <View style={{ flex: 1, paddingTop: 20 }}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => this.setState({ monthModal: false })}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 22,
                  marginLeft: 10,
                  color: "grey"
                }}
              >
                Select month
              </Text>
            </View>
            <ScrollView style={{}}>
              {months.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({ month: item.name, monthModal: false })
                    }
                    style={{
                      height: height * 0.075,
                      justifyContent: "center",
                      paddingLeft: 20
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF"
  },
  inputContainer: {
    justifyContent: "center"
  },
  input: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 30,
    height: "35%"
  },
  textInput: {
    flex: 0.8,
    fontSize: 16,
    color: "grey",
    width: "100%"
  },
  modalHeader: {
    height: height * 0.075,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey"
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Goals);
