import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { ProgressBar } from "../components/Address/ProgressBar";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { AddressForm } from "../components/Address/AddressForm";
import BottomTabs from "../components/Home/BottomTabs";
export const AddressScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <ProgressBar navigation={navigation} step={1}/>
        <Divider />
        <View style={{height:"88%"}}>
          <AddressForm />
        </View>
      </View>
      <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  );
};
