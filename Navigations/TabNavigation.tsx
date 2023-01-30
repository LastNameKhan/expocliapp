import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Search from "../Screens/Search";
import Notification from "../Screens/Notification";
import DrawerNavigation from "./DrawerNavigation";

interface IProps {}

interface IState {}

const Tab = createMaterialBottomTabNavigator();

class TabNavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
