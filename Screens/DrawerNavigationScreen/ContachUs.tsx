import React from "react";
import { Text, View } from "react-native";

interface IProps {}

interface IState {}

class ContactUs extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Contact Us</Text>
      </View>
    );
  }
}

export default ContactUs;
