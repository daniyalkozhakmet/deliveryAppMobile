import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ProfileTab = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginBottom: 35 }}>
      <HeaderButton
        text="Login"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Register"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};
const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab == text ? "#FF6464" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        setActiveTab(text);
      }}
    >
      <Text
        style={{
          color: activeTab == text ? "black" : "#FF6464",
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default ProfileTab;
