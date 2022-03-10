import {
  View,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";

import { Image, Input, Text, Card, Icon } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../components/Header";
import ActivityLog from "../../components/ActivityLog";

import Carousel from "react-native-snap-carousel";
import { ScrollView } from "react-native-gesture-handler";
import Popup from "./popup";

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
];

const Page1 = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Header navigation={navigation} />
        <Text
          h4
          h4Style={{
            alignSelf: "center",
            fontSize: RFValue(20),
            fontWeight: "400",
            marginVertical: hp("5%"),
          }}
        >
          Hair Journal
        </Text>
        <View style={{ marginHorizontal: wp("7%"), marginTop: 10 }}>
          {/* <FlatList
            nestedScrollEnabled={true}
            data={data}
            renderItem={(item) => <ActivityLog />}
            keyExtractor={(item) => item.id}
          /> */}
          {data.map((item, index) => (
            <TouchableOpacity onPress={() => navigation.navigate("Open")}>
              <ActivityLog key={item.id} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={{
            height: hp("10%"),
            width: hp("10%"),
            borderRadius: hp("5%"),
            backgroundColor: "#98CE83",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: -hp("5%"),

            shadowColor: "#000",

            elevation: 7,
          }}
          onPress={() => setVisible(!visible)}
        >
          <Text h3>+</Text>
        </TouchableOpacity>
        {visible ? (
          <Popup modalVisible={visible} setModalVisible={setVisible} />
        ) : null}
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

export default Page1;
