import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";
import StackNavigation from "./Navigations/StackNavigation";
import DrawerNavigation from "./Navigations/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <StackNavigation /> */}
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
