import { View } from "react-native";
import React from "react";
import { Image, Input, Text, Button, Card, Icon } from "react-native-elements";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ActivityLog = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ borderBottomWidth: 1, flex: 1, paddingBottom: 20 }}>
        <Text
          h3
          h3Style={{
            fontSize: RFValue(18),
            fontWeight: "300",
            marginTop: hp("1%"),
          }}
          numberOfLines={1}
          textBreakStrategy="highQuality"
        >
          some textjkfvbfkdjfhgjdfgjkhdfkjghdkfjghkdfjhgkjdfhgkjdfhgkjdfhgkj
        </Text>
        <Text
          h4
          h4Style={{
            fontSize: RFValue(16),
            fontWeight: "300",
            color: "gray",
          }}
        >
          19/November
        </Text>
      </View>
      <View style={{ marginTop: 5, marginLeft: 5 }}>
        <Icon
          onPress={() => navigation.openDrawer()}
          name="star"
          type="Entypo"
          color="#A87538"
          size={32}
        />
      </View>
    </View>
  );
};

export default ActivityLog;
