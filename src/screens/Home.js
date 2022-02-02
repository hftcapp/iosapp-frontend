import "@react-native-community/art";
import { ImageBackground, StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Image, Input, Text, Button, Card, Icon } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Pie from "react-native-pie";

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View>
        <ScrollView>
          <ImageBackground
            source={require("../res/home1.png")}
            style={{ width: wp("100%"), height: hp("43%") }}
          >
            <Header navigation={navigation} />

            <View
              style={{
                backgroundColor: "white",
                height: hp("6%"),
                width: wp("55%"),
                alignSelf: "center",
                borderRadius: 30,
                marginVertical: 7,
                marginTop: hp("6%"),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                h4
                h4Style={{
                  alignSelf: "center",
                  fontSize: RFValue(18),
                  fontWeight: "500",
                }}
              >
                Good Morning Zain
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: hp("6%"),
                width: wp("55%"),
                alignSelf: "center",
                borderRadius: 30,
                marginVertical: 7,

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                h4
                h4Style={{
                  alignSelf: "center",
                  fontSize: RFValue(18),
                  fontWeight: "500",
                }}
              >
                Have a nice day
              </Text>
            </View>
          </ImageBackground>
          <View>
            <Text
              style={{
                fontSize: RFValue(18),
                fontWeight: "400",
                alignSelf: "center",
                marginVertical: hp("5%"),
              }}
            >
              MODEL OF THE MONTH
            </Text>
          </View>
          <ImageBackground
            source={require("../res/home2.png")}
            style={{ height: hp("65%"), width: wp("100%") }}
            resizeMode="stretch"
          >
            <Button
              // onPress={() => navigation.navigate("DrawerNav")}
              title="View Calender"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#98CE83",
                borderRadius: 30,
              }}
              containerStyle={{
                width: "50%",
                alignSelf: "center",
                marginTop: hp("45%"),
              }}
              titleStyle={{ fontWeight: "400", color: "black" }}
            />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
            >
              <View
                style={{
                  width: wp("5%"),
                  height: wp("5%"),
                  borderRadius: wp("5%"),
                  backgroundColor: "#98CE83",
                  marginRight: 10,
                }}
              />
              <Text style={{ color: "#98CE83", fontSize: RFValue(16) }}>
                Hair Journey was very good
              </Text>
            </View>
          </ImageBackground>
          <View>
            <Text
              style={{
                fontSize: RFValue(26),
                fontWeight: "400",
                alignSelf: "center",
                marginVertical: hp("5%"),
              }}
            >
              Progress
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(26),
                fontWeight: "400",
                alignSelf: "center",
                marginBottom: hp("5%"),
              }}
            >
              Daily
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Icon
              //onPress={() => navigation.openDrawer()}
              name="left"
              type="antdesign"
              color="#A87538"
              size={27}
            />
            <Card
              containerStyle={{
                width: wp("75%"),
                height: hp("60%"),
                alignSelf: "center",
              }}
            >
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
                }}
                titleStyle={{ fontWeight: "400", color: "black" }}
              />
            </Card>
            <Icon
              //onPress={() => navigation.openDrawer()}
              name="right"
              type="antdesign"
              color="#A87538"
              size={27}
            />
          </View>
          <View
            style={{
              width: wp("100%"),
              height: hp("30%"),
              backgroundColor: "#98CE83",
              marginTop: hp("10%"),
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View>
              <Text>Home</Text>
              <Text>Free Vector</Text>
              <Text>All Vectors</Text>
            </View>
            <View>
              <Image
                source={require("../res/facebook.png")}
                style={{ width: 35, height: 35 }}
              />
              <Image
                source={require("../res/instagram.png")}
                style={{ width: 35, height: 35 }}
              />
              <Image
                source={require("../res/linkedin.png")}
                style={{ width: 35, height: 35 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
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

export default Home;
