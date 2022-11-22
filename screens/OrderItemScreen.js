import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import BottomTabs from "../components/Home/BottomTabs";
import { OrderItemHeader } from "../components/OrderItemScreen/OrderItemHeader";
import { orderData } from "../orderDummy";
import { OrderItemBook } from "../components/OrderItemScreen/OrderItemBook";
import { BookItem } from "../components/Books/BookItem";
export const OrderItemScreen = ({ navigation, route }) => {
  const { orderId } = route.params;
  const orderByID = orderData.filter((it) => it.orderId == orderId);
  const orderItem = orderByID[0].orderItem;
  //Fetch order by ID
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <OrderItemHeader navigation={navigation} orderId={orderId} />
        <View style={{ height: "88%" }}>
          <ScrollView>
            {orderItem.map((item) => (
              <BookItem book={item} key={item.id} />
            ))}
          </ScrollView>
        </View>
      </View>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
