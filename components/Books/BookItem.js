import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
export const BookItem = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "white", padding: 15, marginTop: 10 }}
    >
      <View style={{ flexDirection: "row" }}>
        <BookImage image={props.book.image} />
        <BookInfo
          name={props.book.name}
          description={props.book.description && props.book.description.slice(0,100)}
          rating={props.book.rating}
        />
      </View>
    </TouchableOpacity>
  );
};
const BookImage = (props) => {
  return (
    <>
      <Image
        style={{ width: "40%", height: 200 }}
        source={{
          uri: props.image,
        }}
      />
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          borderRadius: 15,
          justifyContent: "center",
          position: "absolute",
          bottom: 7,
          right: 50,
        }}
      >
        <Text>90</Text>
      </View>
      <TouchableOpacity style={{ position: "absolute", bottom: 10, right: 20 }}>
        <AntDesign name="hearto" size={25} />
      </TouchableOpacity>
    </>
  );
};

const BookInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        paddingHorizontal: 7,
        alignItems: "flex-start",
        width: "60%"
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 4 }}>
          {props.name}
        </Text>
        {props.rating == 0 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
          </View>
        )}
        {props.rating == 1 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="staro" size={20} />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
          </View>
        )}
        {props.rating == 2 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
          </View>
        )}
        {props.rating == 3 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
          </View>
        )}
        {props.rating == 4 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="staro" size={20} />
            <AntDesign name="star" size={20} color="orange" />
          </View>
        )}
        {props.rating == 5 && (
          <View
            style={{ flexDirection: "row", marginBottom: 10, fontSize: 25 }}
          >
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
            <AntDesign name="star" size={20} color="orange" />
          </View>
        )}
        <Text style={{ fontSize: 13, color: "gray" }}>{props.description}</Text>
      </View>
    </View>
  );
};
