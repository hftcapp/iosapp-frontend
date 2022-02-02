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

const Quiz3 = ({ navigation }) => {
  const [processed, setprocessed] = React.useState(false);
  const [natural, setnatural] = React.useState(false);

  const processedCheck = () => {
    setnatural(false);
    setprocessed(true);
  };
  const naturalCheck = () => {
    setnatural(true);
    setprocessed(false);
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
        <View style={{ width: wp("70%"), alignSelf: "center" }}>
          <Text
            h3
            h3Style={{ fontWeight: "300", fontSize: RFValue(20) }}
            style={{ alignSelf: "center", marginVertical: hp("4%") }}
            lineBreakMode="tail"
          >
            What is the condition of your hair?
          </Text>
        </View>
        <View style={{ marginHorizontal: wp("12%") }}>
          <CheckBox
            title="Processed"
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
            onPress={processedCheck}
            checked={processed}
          />
          <CheckBox
            title="Natural"
            textStyle={{ fontSize: RFValue(20), fontWeight: "300" }}
            containerStyle={{
              backgroundColor: "transparent",
              borderWidth: 0,
              marginBottom: hp("3%"),
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
            onPress={naturalCheck}
            checked={natural}
          />

          <View
            style={{
              marginHorizontal: wp("10%"),
              marginVertical: hp("2%"),
            }}
          >
            <LinearProgress
              value={1}
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
          onPress={() => navigation.navigate("Recommendation")}
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

export default Quiz3;
