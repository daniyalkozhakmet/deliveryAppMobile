import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import BottomTabs from "../components/Home/BottomTabs";
import { Login } from "../components/Profile/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileBefore = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("login");
  const token = async () => {
    try {
      // await AsyncStorage.clear();
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        navigation.navigate("ProfileAfter");
      }
      console.log('token',JSON.parse(value));
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    token();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ height: "96%" }}>
        <Login navigation={navigation} />
      </View>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
