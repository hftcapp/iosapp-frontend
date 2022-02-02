import { View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Image, Input, Text, Button, Icon } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Icon
          onPress={() => navigation.openDrawer()}
          name="menu"
          type="Entypo"
          color="#A87538"
          size={27}
        />
        <View style={{ height: 27, width: 27 }} />
      </View>
      <Image
        source={require("../res/logo.png")}
        containerStyle={{ height: hp("12%"), width: wp("50%") }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Icon name="person-outline" type="Ionicons" color="black" size={27} />
        <Icon
          style={{ marginLeft: 5, marginTop: 1 }}
          name="bell"
          type="font-awesome"
          color="black"
          size={25}
        />
      </View>
    </View>
  );
};

export default Header;
