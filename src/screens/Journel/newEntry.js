import { View } from "react-native";
import React from "react";

import { Image, Input, Text, Button, Card, Icon } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import Header from "../../components/Header";

const data = [
  {
    image: require("../../res/crousel2.png"),
    text: "Do I care for my hair differently in the summer months vs. winter months?",
  },
  {
    image: require("../../res/crousel2.png"),
    text: "Do I care for my hair differently in the summer months vs. winter months?",
  },
  {
    image: require("../../res/crousel2.png"),
    text: "Do I care for my hair differently in the summer months vs. winter months?",
  },
];

const NewEntry = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header navigation={navigation} />
      <Text
        h4
        h4Style={{
          alignSelf: "center",
          fontSize: RFValue(20),
          fontWeight: "400",
          marginTop: hp("5%"),
        }}
      >
        Hair Journal
      </Text>
      <View style={{ alignSelf: "center", marginVertical: 25 }}>
        <Image
          source={require("../../res/MaskGroup.png")}
          style={{ width: wp("30%"), height: hp("15%") }}
          resizeMode="stretch"
        />
      </View>
      <View style={{ marginHorizontal: wp("12%") }}>
        <Text
          h4
          h4Style={{
            alignSelf: "center",
            fontSize: RFValue(16),
            fontWeight: "400",
          }}
        >
          Let get Start to write the journal about your interset , growth and
          motivation
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate("Page1")}
        title="New Entry"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "#98CE83",
          borderRadius: 30,
        }}
        containerStyle={{
          width: "50%",
          alignSelf: "center",
          borderRadius: 30,
          marginVertical: 25,
        }}
        titleStyle={{ fontWeight: "400", color: "black" }}
      />
      <View style={{ marginHorizontal: wp("12%"), marginTop: hp("7%") }}>
        <Text
          h4
          h4Style={{
            alignSelf: "flex-start",
            fontSize: RFValue(16),
            fontWeight: "400",
          }}
        >
          Suggestion
        </Text>
      </View>
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
            <View
              style={{
                shadowColor: "#000",
                elevation: 2,
                borderRadius: 2.22,
                height: hp("20%"),
              }}
            >
              <Text
                h4
                h4Style={{
                  alignSelf: "flex-start",
                  fontSize: RFValue(18),
                  fontWeight: "400",
                  margin: 8,
                }}
              >
                {item.text}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewEntry;
