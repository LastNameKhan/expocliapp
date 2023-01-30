import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Login from "./Login";
import TabNavigation from "../Navigations/TabNavigation";

interface IProps {
  navigation?: any;
}

interface IState {}

class Todo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Todo</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 30 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Todo;
