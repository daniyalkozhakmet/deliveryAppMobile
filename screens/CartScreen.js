import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { CartHeader } from "../components/Cart/CartHeader";
import { CartItem } from "../components/Cart/CartItem";
import BottomTabs from "../components/Home/BottomTabs";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
export const CartScreen = ({ navigation }) => {
  const { cart, loading, error } = useSelector((state) => state.cart);
  console.log(cart[0]);
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <CartHeader navigation={navigation} />
        <ScrollView>
          <View style={{ paddingHorizontal: 5, paddingTop: 10 }}>
            {cart.length > 0 &&
              cart.map((item) => (
                <CartItem
                  title={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
          </View>
        </ScrollView>
        <ProceedBtn />
      </View>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const ProceedBtn = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        alignSelf: "flex-start",
        borderRadius: 20,
        backgroundColor: "black",
        marginLeft: 20,
        position: "absolute",
        bottom: "10%",
        left: "50%",
        width: 100,
        transform: [{ translateX: -60 }, { translateY: -50 }],
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "500",
          textAlign: "center",
          color: "white",
          paddingVertical: 7,
          paddingHorizontal: 20,
        }}
      >
        Next
      </Text>
    </View>
  );
};
