import { TouchableOpacity, TouchableHighlight, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Image, Input, Text, Button } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../res/logo.png")}
          containerStyle={{ height: hp("20%"), width: wp("30%") }}
        />
        <Text
          h3
          h3Style={{
            fontWeight: "600",
            alignSelf: "center",
            marginBottom: 18,
          }}
        >
          Sign Up
        </Text>
        <Input
          inputContainerStyle={{
            borderWidth: 1,
            marginHorizontal: 10,
            paddingLeft: 5,
          }}
          placeholder="Email"
        />
        <Input
          inputContainerStyle={{
            borderWidth: 1,
            marginHorizontal: 10,
            paddingLeft: 5,
          }}
          placeholder="Password"
        />
        <Input
          inputContainerStyle={{
            borderWidth: 1,
            marginHorizontal: 10,
            paddingLeft: 5,
          }}
          placeholder="Email"
        />
        <Input
          inputContainerStyle={{
            borderWidth: 1,
            marginHorizontal: 10,
            paddingLeft: 5,
          }}
          placeholder="Password"
        />
        <Button
          onPress={() => navigation.navigate("Quiz1")}
          title="Sign up"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "#98CE83",
            borderRadius: 30,
          }}
          containerStyle={{
            width: "60%",
            alignSelf: "center",
            marginTop: "5%",
            borderRadius: 30,
          }}
          titleStyle={{ fontWeight: "600", color: "black" }}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            h4
            h4Style={{ fontSize: RFValue(18) }}
            style={{
              alignSelf: "center",
              color: "#A87538",
            }}
          >
            Return to ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              h4
              h4Style={{ fontSize: RFValue(18) }}
              style={{
                alignSelf: "center",
                textAlignVertical: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default SignUp;
