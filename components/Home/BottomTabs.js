import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";
const BottomTabs = ({ navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        bottom: 0,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 7,
          marginHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <Icon icon="home" text="Home" navigation={navigation} />

        <Icon icon="shopping-cart" text="Cart" navigation={navigation} />

        <Icon icon="book" text="Books" navigation={navigation} />

        <Icon icon="receipt" text="Address" navigation={navigation} />

        {/* <Icon icon="user" text="ProfileAfter" navigation={navigation} /> */}
        <Icon icon="user" text="Register" navigation={navigation} />
      </View>
    </View>
  );
};
const Icon = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate(props.text)}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text style={{ fontSize: 10 }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
export default BottomTabs;
