import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { AntDesign } from "react-native-vector-icons";
export const CartHeader = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          marginVertical: 20,
          justifyContent: "start",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name={"left"} size={25} />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: "flex-start",
            borderRadius: 20,
            backgroundColor: "black",
            marginLeft: "25%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
              color: "white",
              paddingVertical: 7,
              paddingHorizontal: 20,
            }}
          >
            Cart Items
          </Text>
        </View>
      </View>
      <Divider width={1} color={"grey"} />
    </View>
  );
};
