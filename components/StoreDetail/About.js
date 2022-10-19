import { View, Text, Image } from "react-native";
import React from "react";

export const About = ({ store }) => {
  return (
    <View>
      <RestaurantImage image={store.image} />
      <RestauranttTitle title={store.name} />
      <RestaurantDescrption description={store.description} />
    </View>
  );
};

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{ width: "100%", height: 180, resizeMode: "cover" }}
  />
);
const RestauranttTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 4,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);
const RestaurantDescrption = (props) => (
  <Text
    style={{
      marginTop: 3,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
