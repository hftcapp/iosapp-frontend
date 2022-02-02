import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import StackNav from "./src/navigation/StackNav";
import DrawerNav from "./src/navigation/DrawerNav";
import { SafeAreaView } from "react-native-safe-area-context";
import Bottomtab from "./src/navigation/Bottomtab";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
