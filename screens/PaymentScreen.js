import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { ProgressBar } from "../components/Address/ProgressBar";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import { PaymentForm } from "../components/Payment/PaymentForm";
export const Payment = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <ProgressBar navigation={navigation} step={2} />
        <Divider size={1} />
        <View style={{ height: "88%" }}>
          <PaymentForm navigation={navigation} />
        </View>
      </View>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
