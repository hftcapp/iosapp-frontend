import { View } from "react-native";
import React from "react";
import {
  Image,
  Text,
  CheckBox,
  LinearProgress,
  Button,
} from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    image: require("../../res/crousel2.png"),
    text: "Product 1",
  },
  {
    image: require("../../res/crousel2.png"),
    text: "Product 2",
  },
  {
    image: require("../../res/crousel2.png"),
    text: "Product 3",
  },
];

const Recommendation = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Image
          source={require("../../res/logo.png")}
          containerStyle={{ width: wp("30%"), height: hp("20%") }}
        />
        <Text
          h3
          h3Style={{ fontWeight: "600", fontSize: RFValue(24) }}
          style={{ alignSelf: "center" }}
        >
          Recommendation
        </Text>
        <Carousel
          layout="default"
          data={data}
          sliderWidth={wp("100%")}
          itemWidth={wp("50%")}
          containerCustomStyle={{
            borderColor: "black",
            height: hp("20%"),
          }}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Image
                  source={item.image}
                  containerStyle={{
                    width: wp("50%"),
                    height: hp("40%"),
                  }}
                  style={{ resizeMode: "contain" }}
                />
                <Text style={{ alignSelf: "center" }}>{item.text}</Text>
              </View>
            );
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onPress={() => navigation.navigate("DrawerNav")}
            title="Save in Journel"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "#98CE83",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "40%",
              alignSelf: "center",
              borderRadius: 30,
            }}
            titleStyle={{
              fontWeight: "400",
              color: "black",
              fontSize: RFValue(16),
            }}
          />
          <Button
            onPress={() => navigation.navigate("DrawerNav")}
            title="Skip"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "#fff",
              borderRadius: 30,

              borderWidth: 1,
              borderColor: "#A87538",
            }}
            containerStyle={{
              width: "20%",
              alignSelf: "center",
              marginLeft: 5,
              borderRadius: 30,
            }}
            titleStyle={{
              fontWeight: "400",
              color: "black",
              fontSize: RFValue(16),
            }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Recommendation;
