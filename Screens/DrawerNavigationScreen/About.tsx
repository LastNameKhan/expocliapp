import React from "react";
import { Text, View } from "react-native";

interface IProps {}

interface IState {}

class About extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>About Us</Text>
      </View>
    );
  }
}

export default About;
