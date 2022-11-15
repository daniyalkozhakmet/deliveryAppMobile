import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React from "react";
import { CartHeader } from "../components/Cart/CartHeader";
import { CartItem } from "../components/Cart/CartItem";
import BottomTabs from "../components/Home/BottomTabs";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
export const CartScreen = ({ navigation }) => {
  const { cart, loading, error } = useSelector((state) => state.cart);
  const calcSum = () => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.qty;
    });
    return sum;
  };

  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <CartHeader navigation={navigation} sum={calcSum()} />
        <ScrollView>
          <View style={{ paddingHorizontal: 5, paddingTop: 10 }}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  qty={item.qty}
                  title={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))
            ) : (
              <View
                style={{
                  height: 500,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{Alert.alert("Your cart is empty")}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <Text
                    style={{ color: "blue", fontSize: 20, fontWeight: "500" }}
                  >
                    Go shopping
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
        {calcSum() > 0 && <ProceedBtn navigation={navigation} />}
      </View>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const ProceedBtn = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={{ bottom: "10%" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Address");
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            borderRadius: 20,
            backgroundColor: "black",
            marginLeft: 20,
            position: "absolute",
            left: "35%",
            transform: [{ translateX: -60 }, { translateY: -50 }],
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
            Proceed to Address
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
