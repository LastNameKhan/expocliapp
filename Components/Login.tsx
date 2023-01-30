import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

interface IProps {
  navigation?: any;
}

interface IState {
  email: string;
  password: string;
}

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = async () => {
    const { email, password } = this.state;
    try {
      const body = {
        email: this.state.email,
        password: this.state.password,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const res = await fetch("https://reqres.in/api/register", options);
      const resJson = await res.json();
      if (res.status === 200) {
        if (resJson?.token) {
          console.log(res.status);
          AsyncStorage.setItem("token", resJson.token);
          this.props.navigation.navigate("Todo");
        } else {
          console.log("Credentials");
        }
      } else {
        Alert.alert("Wrong Credentials");
      }
    } catch (e) {
      console.log(e, "credential");
    }
  };
  render() {
    return (
      <View>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: "https://i.pinimg.com/originals/6e/f8/bc/6ef8bcc5bcb766a9a7bdd4109f04fe63.jpg",
          }}
        ></ImageBackground>
        <Text style={styles.force}>May The Force Be With You</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(e: any) => this.setState({ email: e })}
          placeholder="Username"
          placeholderTextColor="#d1cfcf"
          style={styles.emailinput}
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(e: any) => this.setState({ password: e })}
          placeholder="Enter password"
          secureTextEntry={true}
          placeholderTextColor="#d1cfcf"
          style={styles.passinput}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttontext}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
//@ts-ignore
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    height: 900,
    width: 400,
  },
  force: {
    fontSize: 30,
    color: "white",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.5,
  },
  emailinput: {
    borderBottomWidth: 3,
    height: 30,
    width: 300,
    borderColor: "white",
    color: "white",
    marginLeft: 50,
    fontSize: 30,
    textAlign: "center",
    marginTop: 200,
  },
  passinput: {
    borderBottomWidth: 3,
    height: 30,
    margin: "auto",
    width: 300,
    borderColor: "white",
    marginTop: 20,
    marginLeft: 50,
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  button: {
    borderWidth: 3,
    height: 50,
    width: 105,
    borderColor: "white",
    marginBottom: 300,
    marginLeft: 150,
    borderLeftWidth: 4,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderTopWidth: 2,
    marginTop: 20,
  },
  buttontext: {
    color: "white",
    fontSize: 30,
  },
});
export default Login;
