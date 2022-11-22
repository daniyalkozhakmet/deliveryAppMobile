import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

export const PaymentForm = ({ navigation }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardDate, setCardDate] = useState({
    month: "",
    year: "",
  });
  const cardDataHandler = () => {
    // navigation.navigate("Payment");
    console.log({ cardName, cardNumber, cvc, cardDate });
    navigation.navigate('Order')
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
            Payment
          </Text>
          <View style={{ width: "90%", marginHorizontal: "5%" }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
              >
                Name of Card
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Enter an card name..."
                  placeholderTextColor="#003f5c"
                  onChangeText={(cardName) => setCardName(cardName)}
                />
              </View>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
              >
                Credit Card
              </Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="number..."
                  placeholderTextColor="#003f5c"
                  keyboardType="numeric"
                  onChangeText={(cardNumber) => setCardNumber(cardNumber)}
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
                  CVC
                </Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Enter an CVC..."
                    placeholderTextColor="#003f5c"
                    keyboardType="numeric"
                    onChangeText={(cvc) => setCvc(cvc)}
                  />
                </View>
              </View>
              <View style={{ width: "49%" }}>
                <Text
                  style={{ fontSize: 16, marginBottom: 5, fontWeight: "400" }}
                >
                  Expiration
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.inputView50}>
                    <TextInput
                      style={styles.TextInput}
                      placeholder="Month"
                      keyboardType="numeric"
                      placeholderTextColor="#003f5c"
                      onChangeText={(month) =>
                        setCardDate({ ...cardDate, month: month })
                      }
                    />
                  </View>
                  <View style={styles.inputView50}>
                    <TextInput
                      style={styles.TextInput}
                      placeholder="Year"
                      keyboardType="numeric"
                      placeholderTextColor="#003f5c"
                      onChangeText={(year) =>
                        setCardDate({ ...cardDate, year: year })
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <PaymentBtn cardDataHandler={cardDataHandler} />
    </View>
  );
};

const PaymentBtn = ({ cardDataHandler }) => {
  return (
    <View style={{ position: "absolute", bottom: "20%", left: "27%" }}>
      <TouchableOpacity onPress={() => cardDataHandler()}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "black",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            PLACE ORDER
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
  inputView50: {
    backgroundColor: "#FFDDD2",
    borderRadius: 7,
    width: "48%",
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
