import { View } from "react-native";
import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Image,
  Text,
  CheckBox,
  LinearProgress,
  Button,
} from "react-native-elements";

const Quiz1 = ({ navigation }) => {
  const [curly, setcurly] = React.useState(false);
  const [wavy, setwavy] = React.useState(false);
  const [straight, setstraight] = React.useState(false);

  const curlyCheck = () => {
    setwavy(false);
    setstraight(false);
    setcurly(true);
  };
  const wavyCheck = () => {
    setwavy(true);
    setstraight(false);
    setcurly(false);
  };
  const straightCheck = () => {
    setwavy(false);
    setstraight(true);
    setcurly(false);
  };
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Image
          source={require("../../res/logo.png")}
          containerStyle={{ width: wp("30%"), height: hp("20%") }}
        />
        <Text
          h3
          h3Style={{ fontWeight: "600" }}
          style={{ alignSelf: "center" }}
        >
          Build your Profile
        </Text>
        <Text
          h3
          h3Style={{ fontWeight: "300", fontSize: RFValue(20) }}
          style={{ alignSelf: "center", marginVertical: hp("4%") }}
        >
          What type of hairs you have
        </Text>
        <View style={{ marginHorizontal: wp("12%") }}>
          <CheckBox
            title="Curly"
            textStyle={{ fontSize: RFValue(20), fontWeight: "300" }}
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
              marginVertical: hp("-3%"),
            }}
            style
            checkedIcon={
              <Image
                source={require("../../res/Checked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            uncheckedIcon={
              <Image
                source={require("../../res/Unchecked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            onPress={curlyCheck}
            checked={curly}
          />
          <CheckBox
            title="Straight"
            textStyle={{ fontSize: RFValue(20), fontWeight: "300" }}
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
              marginBottom: hp("-3%"),
            }}
            style
            checkedIcon={
              <Image
                source={require("../../res/Checked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            uncheckedIcon={
              <Image
                source={require("../../res/Unchecked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            onPress={straightCheck}
            checked={straight}
          />
          <CheckBox
            title="Wavy"
            textStyle={{ fontSize: RFValue(20), fontWeight: "300" }}
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
            style
            checkedIcon={
              <Image
                source={require("../../res/Checked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            uncheckedIcon={
              <Image
                source={require("../../res/Unchecked.png")}
                containerStyle={{ height: hp("7%"), width: wp("7%") }}
                style={{ resizeMode: "contain" }}
              />
            }
            onPress={wavyCheck}
            checked={wavy}
          />
          <View
            style={{
              marginHorizontal: wp("10%"),
              marginVertical: hp("2%"),
            }}
          >
            <LinearProgress
              value={0.3}
              variant="determinate"
              color="#98CE83"
              style={{
                backgroundColor: "#C4C4C4",
                height: hp("2%"),
                borderRadius: hp("1%"),
              }}
            />
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate("Quiz2")}
          title="Skip"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "#98CE83",
            borderRadius: 30,
          }}
          containerStyle={{
            width: "30%",
            alignSelf: "center",
            marginTop: "6%",
            borderRadius: 30,
          }}
          titleStyle={{ fontWeight: "600", color: "black" }}
        />
        <Image
          source={require("../../res/istockphoto.png")}
          containerStyle={{ flex: 3, width: wp("40%") }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Quiz1;
