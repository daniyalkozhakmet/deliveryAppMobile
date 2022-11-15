import { View, Text, StyleSheet, Image, ScrollView, Modal } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useEffect, useState } from "react";
import { add_to_cart } from "../../redux/features/cart/cartSlice";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useDispatch, useSelector } from "react-redux";
const MenuItems = ({ foods }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const isBookInCart = (cartItem) => {
    let isContains = false;
    cart.map((book) => {
      if (book.id == cartItem.id) {
        isContains = true;
      }
    });
    return isContains;
  };
  return (
    <ScrollView style={{ height: 330, paddingBottom: 50 }}>
      {foods &&
        foods.map((food) => (
          <View key={food.id}>
            <View style={styles.menuItemStyle}>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <BouncyCheckbox
                  iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                  fillColor="green"
                  isChecked={isBookInCart(food)}
                  onPress={(checkboxValue) =>
                    dispatch(
                      add_to_cart({ food: { ...food, qty: 1 }, checkboxValue })
                    )
                  }
                />
                <FoodInfo food={food} />
              </View>

              <FoodImage food={food} />
            </View>
            <Divider width={1} />
          </View>
        ))}
    </ScrollView>
  );
};
const FoodInfo = (props) => (
  <View
    style={{ width: 200, justifyContent: "space-evenly", paddingVertical: 10 }}
  >
    <Text style={styles.titleStyle}>{props.food.name}</Text>
    <Text>{props.food.description.slice(0, 50)}</Text>
    <Text style={{ fontWeight: "700", marginTop: 10 }}>
      {props.food.price} $
    </Text>
  </View>
);
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
export default MenuItems;
