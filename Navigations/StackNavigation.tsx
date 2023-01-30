import React from "react";
import { Text, View } from "react-native";
import Login from "../Components/Login";
import Todo from "../Components/Todo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

interface IProps {}

interface IState {}

const Stack = createNativeStackNavigator();

class StackNavigation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Todo" component={TabNavigation} />
      </Stack.Navigator>
    );
  }
}

export default StackNavigation;
