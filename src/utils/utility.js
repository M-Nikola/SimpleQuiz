import { NetInfo } from "react-native";
import { Alert, } from "react-native";
var _ = require('lodash');
// check internet is available or not
export const isInternetActive = async () => {
  return new Promise((resolve, reject) => {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      if(connectionInfo.type === "none"){
        resolve(false);
      }else{
        resolve(true);
      }
    });
  });
};
export var isMessageDisplay = false;
export const noInternetMessage = () => {
  if(!isMessageDisplay){
    isMessageDisplay = true;
    Alert.alert(
      "Mesasge",
      "No Internet Connection",
      [
        {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
        {text: "OK", onPress: () => console.log("OK Pressed")},
      ],
      { cancelable: false }
    );
  }
};

export const noIMessage = () => {

};


export const alertMessage = (message, onPress) => {
 
  Alert.alert(
    "Mesasge",
    message,
    [
      {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
      {text: "OK", onPress:onPress},
    ],
    { cancelable: false }
  );
};

export const parseData = (data) => {
  var index= 0;
  const list = [];
  _.map(data, value => {
    var key = Object.keys(data)[index];
    if(typeof(value) === "object"){
      list.push(key);
    }
    
    index = index + 1;
  });
  return list;
}
export const parseDataChapter = (data) => {
  var index= 0;
  const list = [];
  _.map(data, value => {
    var key = Object.keys(data)[index];
    if(typeof(value) === "object"){
      list.push(key);
    }
    
    index = index + 1;
  });
  return list;
}
export const parseQuizData = (data) => {
  var index= 0;
  const list = [];
  _.map(data, value => {
    var key = Object.keys(data)[index];
    if(typeof(value) === "object"){
      value.page = key;
      list.push(value)
    }
    
    index = index + 1;
  });
  return list;
}

export const parseQuestion = (data) => {
  var index= 0;
  const list = [];
  _.map(data, value => {
    var key = Object.keys(data)[index];
   const keyValue = key.substring(0, key.length - 1);
    
    if(keyValue === "answer") 
      list.push(value)
    index = index + 1;
  });
  return list;
}

