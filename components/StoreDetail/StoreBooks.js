import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
const MenuItems = ({foods}) => {
  return (
    <ScrollView style={{height:330}}>
      {foods && foods.map((food) => (
        <View>
          <View style={styles.menuItemStyle}>
          <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                // isChecked={isFoodInCart(food, cartItems)}
                // onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            <FoodInfo food={food} />
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
    style={{ width: 240, justifyContent: "space-evenly", paddingVertical: 10 }}
  >
    <Text style={styles.titleStyle}>{props.food.name}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);
const FoodImage = (props) => (
  <View>
    {console.log(props.food.image)}
    <Image
      source={{ uri: props.food.image}}
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
