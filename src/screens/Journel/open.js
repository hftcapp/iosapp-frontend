import "@react-native-community/art";
import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Icon, Text, Card, Button, Image } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Pie from "react-native-pie";
import { ScrollView } from "react-native-gesture-handler";

import Carousel from "react-native-snap-carousel";

const data = [
  {
    id: 1,
    image: require("../../res/crousel2.png"),
    text: "p1",
  },
  {
    id: 2,
    image: require("../../res/crousel2.png"),
    text: "p2",
  },
  {
    id: 3,
    image: require("../../res/crousel2.png"),
    text: "p3",
  },
  {
    id: 4,
    image: require("../../res/crousel2.png"),
    text: "p1",
  },
  {
    id: 5,
    image: require("../../res/crousel2.png"),
    text: "p2",
  },
  {
    id: 6,
    image: require("../../res/crousel2.png"),
    text: "p3",
  },
  {
    id: 7,
    image: require("../../res/crousel2.png"),
    text: "p1",
  },
  {
    id: 8,
    image: require("../../res/crousel2.png"),
    text: "p2",
  },
  {
    id: 9,
    image: require("../../res/crousel2.png"),
    text: "p3",
  },
];

const Opena = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Header navigation={navigation} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 30,
          }}
        >
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-left"
            type="Entypo"
            color="#A87538"
            size={35}
          />
          <Text
            h4
            h4Style={{
              fontSize: RFValue(20),

              fontWeight: "400",
            }}
          >
            Hair Journal
          </Text>
          <View style={{ width: 35 }} />
        </View>
        <Text
          h4
          h4Style={{
            fontSize: RFValue(18),
            color: "gray",
            fontWeight: "400",
            marginLeft: 20,
          }}
        >
          19/ Novenber/2021
        </Text>
        <Text
          h4
          h4Style={{
            fontSize: RFValue(18),
            fontWeight: "400",
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          Somthing write in the journel what you want to write in the journel,
          which you experience in a day , week , month or year.
        </Text>
        <Card
          containerStyle={{
            width: wp("75%"),
            height: hp("60%"),
            alignSelf: "center",
            marginVertical: 40,
          }}
        >
          <Text h3 h3Style={{ alignSelf: "center", marginVertical: 10 }}>
            Daily
          </Text>
          <Button
            // onPress={() => navigation.navigate("DrawerNav")}
            title="View Profile"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "#98CE83",
              borderRadius: 30,
            }}
            containerStyle={{
              width: "50%",
              borderRadius: 30,
              alignSelf: "center",

              marginTop: 20,
            }}
            titleStyle={{ fontWeight: "400", color: "black" }}
          />
          <View
            style={{
              width: "85%",
              marginHorizontal: 20,
              borderBottomWidth: 1,
              marginVertical: 20,
            }}
          />
          <View
            style={{
              width: 175,
              alignItems: "center",
              alignSelf: "center",
              marginVertical: hp("10%"),
            }}
          >
            <Pie
              radius={80}
              innerRadius={65}
              sections={[
                {
                  percentage: 60,
                  color: "#4D94FF",
                },
              ]}
              backgroundColor="#DFDEDE"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>60%</Text>
            </View>
          </View>
        </Card>
        <View style={{ marginHorizontal: wp("12%"), marginTop: hp("7%") }}>
          <Text
            h4
            h4Style={{
              alignSelf: "flex-start",
              fontSize: RFValue(16),
              fontWeight: "400",
            }}
          >
            Recommendations
          </Text>
        </View>
        <View>
          <Carousel
            layout="default"
            data={data}
            sliderWidth={wp("100%")}
            itemWidth={wp("50%")}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    shadowColor: "#000",

                    elevation: 2,
                    borderRadius: 2.22,

                    marginVertical: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    containerStyle={{
                      width: wp("50%"),
                      height: hp("20%"),
                      marginVertical: hp("2%"),
                    }}
                    style={{ resizeMode: "contain" }}
                  />
                  <Text style={{ alignSelf: "center" }}>{item.text}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginTop: 40 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gauge: {
    position: "absolute",
    width: 100,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
  },
});

export default Opena;
