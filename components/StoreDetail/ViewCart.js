import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { OrderItem } from "./OrderItem";
import { useSelector } from "react-redux";
export const ViewCart = ({ navigation, totalPrice }) => {
  const [modalVisable, setModalVisable] = useState(false);
  const {cart}=useSelector(state=>state.cart)
  const chechOutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.storeName}>Store Name</Text>
            {cart.map(item =>(
              <>
              <OrderItem item={{ price: item.price, title: item.name }} />
              </>
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>SubTotal</Text>
              <Text>{totalPrice}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => setModalVisable(false)}
              >
                <Text style={{ color: "white" }}>Check out  {totalPrice}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 400,
      borderWidth: 1,
    },
    storeName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subTotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subTotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisable}
        transparent={true}
        onRequestClose={() => setModalVisable(false)}
      >
        {chechOutModalContent()}
      </Modal>
      <>
        {totalPrice > 0 && (
          <View
            style={{
              position: "absolute",
              bottom: 70,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                width: "50%",
                backgroundColor: "black",
                borderRadius: 30,
              }}
              onPress={() => setModalVisable(true)}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  textTransform: "uppercase",
                }}
              >
                View Cart {totalPrice.toFixed(2)}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    </>
  );
};
