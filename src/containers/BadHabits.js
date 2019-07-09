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

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const { height } = Dimensions.get("window");

class BadHabits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packs: 0,
      pods: 0,
      level: 0,
      openModal: false,
      selected: "packs"
    };
  }
  componentWillMount() {}

  data = () => {
    return data;
  };

  setStateValue = data => {
    this.setState({ [this.state.selected]: data, openModal: false });
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ height: height * 0.1, justifyContent: "center" }}>
          <Text style={{ fontSize: 44 }}>
            BAD<Text style={{ fontWeight: "bold" }}> HABITS</Text>
          </Text>
        </View>
        <View style={{}}>
          <View
            onPress={() => this.setState({ openModal: true })}
            style={styles.inputContainer}
          >
            <Text style={{ fontWeight: "bold" }}>
              How many packs do you smoke a month?
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({ openModal: true, selected: "packs" })
              }
              style={[styles.input, { flexDirection: "row" }]}
            >
              <View style={{ flex: 0.05 }} />
              <View style={{ flex: 0.85 }}>
                <Text style={{ fontSize: 16, color: "grey" }}>
                  {this.state.packs}
                </Text>
              </View>
              <View style={{ flex: 0.1 }}>
                <AntDesign name="caretdown" color="#24d88d" size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ fontWeight: "bold" }}>
              How many pods do you smoke a week?
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({ openModal: true, selected: "pods" })
              }
              style={[styles.input, { flexDirection: "row" }]}
            >
              <View style={{ flex: 0.05 }} />
              <View style={{ flex: 0.85 }}>
                <Text style={{ fontSize: 16, color: "grey" }}>
                  {this.state.pods}
                </Text>
              </View>
              <View style={{ flex: 0.1 }}>
                <AntDesign name="caretdown" color="#24d88d" size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ fontWeight: "bold" }}>
              How uncomfortable would you feel without the Juul for a whole day?
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState({ openModal: true, selected: "level" })
              }
              style={[styles.input, { flexDirection: "row" }]}
            >
              <View style={{ flex: 0.05 }} />
              <View style={{ flex: 0.85 }}>
                <Text style={{ fontSize: 16, color: "grey" }}>
                  {this.state.level}
                </Text>
              </View>
              <View style={{ flex: 0.1 }}>
                <AntDesign name="caretdown" color="#24d88d" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{ flex: 0.1 }} /> */}
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={Actions.Goals} style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>NEXT</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={this.state.openModal} animationType="slide">
          <View style={{ flex: 1, paddingTop: 20 }}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => this.setState({ openModal: false })}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
              <Text style={styles.modalHeaderText}>Select</Text>
            </View>
            <ScrollView style={{}}>
              {this.data().map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => this.setStateValue(item)}
                    style={styles.modalItem}
                  >
                    <Text>{item}</Text>
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
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF"
  },
  inputContainer: {
    height: height * 0.15,
    justifyContent: "center"
  },
  input: {
    padding: 10,
    height: "50%",
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
    fontSize: 16,
    color: "grey",
    width: "100%"
  },
  buttonView: {
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  modalHeader: {
    height: 50,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgrey"
  },
  modalHeaderText: {
    fontSize: 22,
    marginLeft: 10,
    color: "grey"
  },
  modalItem: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 20
  }
});

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(BadHabits);
