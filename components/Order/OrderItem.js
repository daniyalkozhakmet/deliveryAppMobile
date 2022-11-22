import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
export const OrderItem = ({ orderItem, navigation }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 10,
          height: 100,
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", width: "70%" }}>
          <CheckImage
            image={orderItem.orderItem[0].image}
            id={orderItem.orderId}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              width: "40%",
              height: "100%",
            }}
          >
            <CartContent
              id={orderItem.orderId}
              sum={orderItem.sum}
              navigation={navigation}
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: orderItem.isDelivered ? "green" : "red",
              fontSize: 17,
            }}
          >
            Delivered
          </Text>
        </View>
      </View>
    </View>
  );
};

const CartContent = (props) => {
  return (
    <View
      style={{
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 20 }}>{props.sum} $</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("OrderItem", { orderId: props.id });
        }}
      >
        <Text style={{ color: "blue", fontSize: 17 }}>View Detail</Text>
      </TouchableOpacity>
    </View>
  );
};
const CheckImage = (props) => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove_from_cart(id));
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          height: 70,
          width: 70,
          borderRadius: 10,
          zIndex: 10,
        }}
        source={{
          uri: props.image,
        }}
      />
    </View>
  );
};
