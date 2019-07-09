import React from "react";
import {
  Scene,
  Router,
  Stack,
  Drawer,
  Actions
} from "react-native-router-flux";

import {
  TouchableOpacity,
  Image,
  View,
  Platform,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

//screens
import Intro from "../src/containers/Intro";
import BadHabits from "../src/containers/BadHabits";
import AccountInfo from "../src/containers/AccountInfo";
import Goals from "../src/containers/Goals";
import Dashboard from "../src/containers/Dashboard";
import SideDrawer from "../src/components/SideDrawer";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  // renderDrawerButton = () => (
  //   <TouchableOpacity onPress={Actions.drawerOpen}>
  //     <Image
  //       style={{ flex: 0.8, marginRight: 10 }}
  //       resizeMode="contain"
  //       source={require("./assets/menu.png")}
  //     />
  //   </TouchableOpacity>
  // );

  onPressLeftButton = props => {
    if (props.scene.route.routeName !== "_dashboard") Actions.pop();
    else Actions.drawerOpen();
  };

  navBar = props => {
    console.log(
      "props.scene.route.routeNameprops.scene.route.routeNameprops.scene.route.routeName",
      props.scene.route.routeName,
      props.scene.route.routeName === "_dashboard"
    );
    return (
      <View
        style={[styles.navBar, { height: Platform.OS === "ios" ? 64 : 54 }]}
      >
        {props.scene.route.routeName !== "IntroScreen" ? (
          <TouchableOpacity
            style={styles.leftButton}
            onPress={() => this.onPressLeftButton(props)}
          >
            {props.scene.route.routeName === "_dashboard" ? (
              <Octicons name="three-bars" size={40} color="#000000" />
            ) : (
              <MaterialIcons
                name="keyboard-backspace"
                size={40}
                color="#000000"
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <Router>
        <Scene
          key="root"
          swipeEnabled={false}
          panHandlers={null}
          hideNavBar
          renderBackButton={this.renderBackButton}
          navigationBarStyle={{
            elevation: 0,
            borderBottomWidth: 0
          }}
        >
          <Stack key="Intro" swipeEnabled={false} navBar={this.navBar}>
            <Scene key="IntroScreen" component={Intro} panHandlers={null} />
            <Scene key="BadHabits" component={BadHabits} panHandlers={null} />
            <Scene key="Goals" component={Goals} panHandlers={null} />
            <Scene
              key="AccountInfo"
              component={AccountInfo}
              panHandlers={null}
            />
          </Stack>

          <Stack key="main" navBar={this.navBar}>
            <Drawer
              key="drawer"
              hideNavBar
              contentComponent={SideDrawer}
              drawerPosition={"left"}
            >
              <Scene
                key="dashboard"
                component={Dashboard}
                panHandlers={null}
                hideNavBar={false}
              />
            </Drawer>
          </Stack>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    paddingTop: 20
  },
  leftButton: {
    flex: 0.2,
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
)(Routes);
