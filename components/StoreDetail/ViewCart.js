import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export const ViewCart = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 70,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          width: "50%",
          backgroundColor: "black",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            textTransform: "uppercase",
          }}
        >
          View Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
