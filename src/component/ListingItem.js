
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { LIGHT_BLUE, BLUE } from "../utils/constants";

const ListingItem = props => {
  const { textStyle, linearGradient } = styles;
  return (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[linearGradient, props.style]}>
        <View style={{ marginLeft: 1 }}>
          <Text style={[textStyle, props.buttonStyle]}>{props.name}</Text>
        </View>
    </View>
  </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    padding: 10,
  },
  linearGradient: {
    borderRadius: 10,
    borderColor: BLUE,
    flexDirection: "row",
    flex: 1,
    padding: 10,
    borderWidth: 2,
  }
};

export { ListingItem };
