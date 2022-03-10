import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewEntry from "../screens/Journel/newEntry";
import Page1 from "../screens/Journel/page1";
import Opena from "../screens/Journel/open";

const Stack = createNativeStackNavigator();

const JournalNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewEntry"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Open" component={Opena} />
    </Stack.Navigator>
  );
};

export default JournalNav;
