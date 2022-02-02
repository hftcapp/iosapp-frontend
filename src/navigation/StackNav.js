import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNav from "./DrawerNav";
import Login from "../screens/Auth/Login";
import SignUp from "../screens/Auth/SignUp";
import Quiz1 from "../screens/Quiz/Quiz1";
import Quiz2 from "../screens/Quiz/Quiz2";
import Quiz3 from "../screens/Quiz/Quiz3";
import Recommendation from "../screens/Quiz/Recommendation";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Quiz1" component={Quiz1} />
        <Stack.Screen name="Quiz2" component={Quiz2} />
        <Stack.Screen name="Quiz3" component={Quiz3} />
        <Stack.Screen name="Recommendation" component={Recommendation} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DrawerNav"
          component={DrawerNav}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNav;
