import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import {Ionicons} from 'react-native-vector-icons'
const RestaurantItems = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.storeData ? (
        props.storeData.map((store) => (
          <TouchableOpacity
            onPress={() => {props.navigation.navigate("StoreDetail",{"store_id":store.id})}}
            key={store.id}
            style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}
          >{console.log(store.id)}
            <StoreImage image={store.image} />
            <StoreInfo name={store.name} rating={store.rating} city={store.city.name} />
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 400,
          }}
        >
          <Text style={{ color: "red", fontSize: 17 }}>
            Sorry, no match detected
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const StoreImage = (props) => {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: props.image,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", top: 20, right: 25 }}>
        <AntDesign name="hearto" size={25} />
      </TouchableOpacity>
    </>
  );
};

const StoreInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        paddingHorizontal: 5,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray",marginTop:5 }}><Ionicons name="location-sharp" size={15} /> {props.city}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
export default RestaurantItems;
