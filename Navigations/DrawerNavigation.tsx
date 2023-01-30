import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import About from "../Screens/DrawerNavigationScreen/About";
import ContactUs from "../Screens/DrawerNavigationScreen/ContachUs";
import Help from "../Screens/DrawerNavigationScreen/Help";

interface IProps {}

interface IState {}

const Drawer = createDrawerNavigator();

class DrawerNavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
