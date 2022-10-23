import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Ionicons, Entypo, AntDesign } from "react-native-vector-icons";
export const SearchBarName = ({ setName }) => {
  const [city, setCity] = useState("");
  return (
    <View style={{ marginTop: 15 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          placeholder="Search by name"
          style={styles.textInput}
          value={city}
          onChangeText={(text) => {
            setCity(text);
          }}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={() => {
          setName(city);
          Keyboard.dismiss();
        }}
      >
        <View style={styles.searchButton}>
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 4 }} />
          <Text>Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    paddingLeft: 17,
    borderColor: "black",
    borderRadius: 24,
    backgroundColor: "#eee",
    marginHorizontal: 4,
    fontWeight: "700",
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    top: 12,
    left: 10,
  },
  searchButton: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 9,
    borderRadius: 30,
    position: "absolute",
    zIndex: 2,
    top: -43,
    right: 10,
  },
});
