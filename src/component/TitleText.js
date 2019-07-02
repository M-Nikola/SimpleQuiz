
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { LIGHT_BLUE, BLUE, GRAY } from "../utils/constants";

const TitleText = props => {
  const { textStyle, linearGradient } = styles;
  return (
    <View style={[linearGradient, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginLeft: 1 }}>
          <Text style={[textStyle, props.buttonStyle]}>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    padding: 10,
    textAlign:"center",

  },
  linearGradient: {
   
  }
};
1;
export { TitleText };
