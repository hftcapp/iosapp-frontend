import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNav from "./src/navigation/StackNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
