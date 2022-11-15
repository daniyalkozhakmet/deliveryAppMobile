import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

export const AddressForm = () => {
  const [street, setStreet] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const addressDataHandler = () => {
    console.log({ street, address, zipcode, city });
  };
  return (
    <View style={{ height: "100%" }}>
      <ScrollView>
        <View style={{ position: "relative", height: "100%", paddingTop: 30 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            ADDRESS
          </Text>
          <View style={{ width: "90%", marginHorizontal: "5%" }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
              >
                Delivery Address
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter an address..."
                  placeholderTextColor="#003f5c"
                  onChangeText={(address) => setAddress(address)}
                />
              </View>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
              >
                Street
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter an city..."
                  placeholderTextColor="#003f5c"
                  onChangeText={(street) => setStreet(street)}
                />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "49%" }}>
                <Text
                  style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
                >
                  City
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter an city..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(city) => setCity(city)}
                  />
                </View>
              </View>
              <View style={{ width: "49%" }}>
                <Text
                  style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
                >
                  City
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter an city..."
                    placeholderTextColor="#003f5c"
                    onChangeText={(zipcode) => setZipcode(zipcode)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <PaymentBtn addressDataHandler={addressDataHandler} />
    </View>
  );
};

const PaymentBtn = ({ addressDataHandler }) => {
  return (
    <View style={{ position: "absolute", bottom: "20%", left: "33%" }}>
      <TouchableOpacity onPress={() => addressDataHandler()}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            PAYMENT
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },

  image: {
    marginBottom: 40,
    width: "50%",
    height: "20%",
  },

  inputView: {
    backgroundColor: "#FFDDD2",
    borderRadius: 7,
    width: "100%",
    height: 45,
    marginBottom: 10,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF6464",
  },
});
