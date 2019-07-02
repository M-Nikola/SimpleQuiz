
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { LIGHT_BLUE, BLUE } from "../utils/constants";
const unCheckImage = require("./../../images/ic_uncheck_radio.png");
const checkImage = require("./../../images/ic_check_radio.png");
const QuestionItems = props => {
  const { textStyle, linearGradient } = styles;
  return (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[linearGradient, props.style]}>
        <Image
            style={{
              width: 25,
              height: 25,
              alignSelf: "center"
            }}
            source={props.isSelected ? checkImage : unCheckImage}
            resizeMode="contain"
          />
          <Text style={[textStyle, props.buttonStyle]}>{props.name}</Text>
    </View>
  </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    padding: 10,
    flex:1
  },
  linearGradient: {
    flexDirection: "row",
    padding:10,
    flex: 1,
    
  }
};
export { QuestionItems };
