import React from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";

let { width } = Dimensions.get("window");
export default ({ content }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        style={{
          width: width - 40,
          backgroundColor: "green",
          margin: 20,
          borderRadius: 5,
          padding: 10
        }}
      >
        <Text>{content}</Text>
      </ScrollView>
    </View>
  );
};
