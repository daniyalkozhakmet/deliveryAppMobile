import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import BottomTabs from "../components/Home/BottomTabs";
import { OrderHeader } from "../components/Order/OrderHeader";
import { ScrollView } from "react-native";
import { OrderContainer } from "../components/Order/OrderContainer";
//Fetch order
export const OrderScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <OrderHeader navigation={navigation} />
        <View style={{ height: "88%" }}>
          <ScrollView>
            <OrderContainer navigation={navigation} />
          </ScrollView>
        </View>
      </View>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
