import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Input, Text, Button, Image } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../res/womenill.jpg")}
          style={styles.imagecon}
        />
        <Image
          source={require("../../res/logo.png")}
          style={{
            resizeMode: "cover",
          }}
          containerStyle={styles.imagelogo}
        />
        <View style={{ flex: 3 }}>
          <Text style={styles.loginText} h3 h3Style={{ fontWeight: "400" }}>
            LOGIN
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
            containerStyle={{ marginBottom: -20 }}
            placeholder="Password"
          />
          <Text
            h4
            style={{
              alignSelf: "flex-end",
              marginRight: 18,
              color: "#A87538",
            }}
            h4Style={{ fontWeight: "200", fontSize: RFValue(18) }}
          >
            Forget Password?
          </Text>
          <Button
            onPress={() => navigation.navigate("DrawerNav")}
            title="Login"
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
        </View>

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
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              h4
              h4Style={{ fontSize: RFValue(18) }}
              style={{
                alignSelf: "center",
                textAlignVertical: "center",
              }}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  loginText: {
    alignSelf: "center",
    marginBottom: "5%",
    marginTop: "-10%",
  },
  imagecon: {
    flex: 2,
  },
  imagelogo: {
    width: wp("40%"),
    height: hp("30%"),
    marginTop: hp("-14%"),
    alignSelf: "center",
  },
});

export default Login;
