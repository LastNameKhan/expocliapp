import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface IProps {}

interface IState {}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  containerText: {
    fontSize: 30,
  },
});

export default Search;
