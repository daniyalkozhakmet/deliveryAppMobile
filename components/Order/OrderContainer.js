import { View, Text } from "react-native";
import React from "react";
import { orderData } from "../../orderDummy";
import { OrderItem } from "./OrderItem";
export const OrderContainer = ({ navigation }) => {
  return (
    <View>
      {orderData.map((orderItem) => (
        <OrderItem orderItem={orderItem} navigation={navigation} />
      ))}
    </View>
  );
};
