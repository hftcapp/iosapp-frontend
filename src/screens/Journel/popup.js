import { View, Modal, Text as Textr } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon, Text, Input, Button } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

const Popup = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            width: wp("85%"),
            height: hp("60%"),
            borderRadius: 10,
            shadowColor: "#000",
            elevation: 7,
          }}
        >
          <View style={{ alignSelf: "flex-end", margin: 8 }}>
            <Icon
              onPress={() => setModalVisible(!modalVisible)}
              name="close"
              type="antdesign"
              color="#000"
              size={32}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text h4 h4Style={{ color: "#797979" }}>
              Add Description
            </Text>
            <Input multiline numberOfLines={4} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Icon name="paperclip" type="fontisto" color="gray" size={25} />
            <Text
              h4
              h4Style={{ fontSize: RFValue(16), color: "gray", marginLeft: 10 }}
            >
              Add Progress Picture
            </Text>
          </View>
          <View>
            <Button
              //   onPress={() => navigation.navigate("Page1")}
              title="Save"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#98CE83",
                borderRadius: 30,
                alignSelf: "flex-end",
                width: wp("20%"),
              }}
              containerStyle={{
                width: wp("20%"),
                borderRadius: 30,
                margin: 30,
                alignSelf: "flex-end",
              }}
              titleStyle={{ fontWeight: "400", color: "black" }}
            />
          </View>
          <View
            style={{
              flexWrap: "wrap",
              marginHorizontal: 20,
              marginVertical: 5,
            }}
          >
            <Text
              numberOfLines={1}
              h4
              h4Style={{
                fontSize: RFValue(16),
                color: "gray",
                fontWeight: "200",

                borderWidth: 1,
                paddingHorizontal: 5,
                borderRadius: 8,
                borderColor: "#A87538",
              }}
            >
              Do I need to buy more products?
            </Text>
          </View>
          <View
            style={{
              flexWrap: "wrap",
              marginHorizontal: 20,
              marginVertical: 5,
            }}
          >
            <Text
              h4
              h4Style={{
                fontWeight: "200",
                borderWidth: 1,
                paddingHorizontal: 5,
                borderRadius: 8,
                fontSize: RFValue(16),
                color: "gray",
                borderColor: "#A87538",
              }}
            >
              this is my name
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
