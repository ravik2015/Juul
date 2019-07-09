import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Modal,
  ScrollView,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//vector icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { stateData } from "../constants/jsonData";

const { height } = Dimensions.get("window");

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      uname: "",
      email: "",
      pass: "",
      cpass: "",
      age: "",
      State: "Select",
      stateModal: false
    };
  }
  componentWillMount() {}

  validate = () => {
    let errors = [];
    Object.values(this.state).map((item, index) => {
      if (item === "" || item === "Select")
        errors.push(Object.keys(this.state)[index]);
    });

    if (errors.length)
      Alert.alert(
        "Account info",
        "Please fill all fields before you continue."
      );
    else if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        this.state.email
      )
    )
      Alert.alert("Account info", "Please enter valid email.");
    else if (this.state.pass !== this.state.cpass)
      Alert.alert("Account info", "Password does not match.");
    else Actions.BadHabits();
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={{ height: height * 0.15, justifyContent: "center" }}>
          <Text style={{ fontSize: 38 }}>
            ACCOUNT<Text style={{ fontWeight: "bold" }}> INFO</Text>
          </Text>
        </View>
        <View style={{}}>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <View style={{ flex: 0.1 }}>
                <Ionicons name="md-contact" color="#24d88d" size={30} />
              </View>
              <TextInput
                placeholder="Full Name"
                autoCorrect={false}
                style={styles.textInput}
                value={this.state.fname}
                onChangeText={fname => this.setState({ fname })}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <View style={{ flex: 0.1 }}>
                <Entypo name="email" color="#24d88d" size={30} />
              </View>
              <TextInput
                placeholder="Create username"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                value={this.state.uname}
                onChangeText={uname => this.setState({ uname })}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <View style={{ flex: 0.1 }}>
                <Ionicons name="ios-paper-plane" color="#24d88d" size={30} />
              </View>
              <TextInput
                placeholder="Email address"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.textInput}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <View style={{ flex: 0.1 }}>
                <Entypo name="lock" color="#24d88d" size={30} />
              </View>
              <TextInput
                placeholder="Password"
                autoCorrect={false}
                secureTextEntry
                style={styles.textInput}
                value={this.state.pass}
                onChangeText={pass => this.setState({ pass })}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <View style={{ flex: 0.1 }}>
                <Entypo name="lock" color="#24d88d" size={30} />
              </View>
              <TextInput
                placeholder="Confirm password"
                autoCorrect={false}
                secureTextEntry
                style={styles.textInput}
                value={this.state.cpass}
                onChangeText={cpass => this.setState({ cpass })}
              />
            </View>
          </View>
          <View
            style={[
              styles.inputContainer,
              { flexDirection: "row", justifyContent: "space-between" }
            ]}
          >
            <View
              style={[styles.input, { width: "49%", paddingHorizontal: 20 }]}
            >
              <View style={{ flex: 0.25 }}>
                <Entypo name="calendar" color="#24d88d" size={25} />
              </View>
              <TextInput
                placeholder="Age"
                keyboardType="numeric"
                style={[styles.textInput, { flex: 0.75 }]}
                value={this.state.age}
                onChangeText={age => this.setState({ age })}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.setState({ stateModal: true })}
              style={[styles.input, { width: "49%", paddingHorizontal: 20 }]}
            >
              <View style={{ flex: 0.25 }}>
                <Entypo name="location" color="#24d88d" size={25} />
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 16, color: "grey" }} numberOfLines={1}>
                  {this.state.State}
                </Text>
              </View>
              <View style={{ flex: 0.2 }}>
                <AntDesign name="caretdown" color="#24d88d" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingVertical: 20 }}>
          <Text style={{ color: "#DBDADA" }}>
            We will never share any of your data {"\n"}with anyone or sell your
            data to a 3rd party.
          </Text>
        </View>
        <View
          style={{
            height: height * 0.2,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity onPress={this.validate} style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={this.state.stateModal} animationType="slide">
          <View styl={{ flex: 1, paddingTop: 20 }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({ stateModal: false })}
              >
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color="#000000"
                />
              </TouchableOpacity>
              <Text style={styles.modalHeaderText}>Select state</Text>
            </View>
            <ScrollView style={{}}>
              {stateData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.setState({ State: item.name, stateModal: false })
                    }
                    style={styles.modalItem}
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
    // height: Dimensions.get("window").height,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF"
  },
  inputContainer: {
    justifyContent: "center"
  },
  input: {
    flexDirection: "row",
    paddingVertical: 5,
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
  header: {
    height: height * 0.075,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey"
  },
  modalHeaderText: {
    fontSize: 22,
    marginLeft: 10,
    color: "grey"
  },
  modalItem: {
    height: height * 0.075,
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
)(AccountInfo);
