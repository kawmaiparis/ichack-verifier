import React from "react";
import BabyButton from "react-native-really-awesome-button";
import { View } from "react-native";
const MyButton = ({ title, onPress }) => (
  <View width="80%" style={{ marginTop: 40 }}>
    <BabyButton
      raiseLevel={6}
      activityColor="#FFFFFF"
      borderRadius={25}
      textSize={30}
      backgroundColor="#5c80bc"
      backgroundDarker="#d9d9d9"
      backgroundPlaceholder="#5c80bc"
      textColor="#000"
      backgroundProgress="#f0f0f0"
      height={80}
      stretch
      progress
      onPress={next => {
        onPress(next);
      }}
    >
      {title.toUpperCase()}
    </BabyButton>
  </View>
);

export default MyButton;
