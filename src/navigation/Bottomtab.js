import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const Bottomtab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Homeabc"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;
