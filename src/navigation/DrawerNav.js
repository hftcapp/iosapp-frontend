import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import JournalNav from "./JournalNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Hair Journal" component={JournalNav} />
      <Drawer.Screen name="Hair Profile" component={Contact} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
