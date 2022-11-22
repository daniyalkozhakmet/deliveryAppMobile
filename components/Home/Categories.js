import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign,Entypo,Feather } from "react-native-vector-icons";
const Categories = () => {
  return (
    <ScrollView
      horizontal
      style={{
        marginTop: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      
        <View style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}>
          <AntDesign name='book' size={30} color="red" />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>Classical</Text>
        </View>
              
        <View style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}>
          <Entypo name='book' size={30} color="orange" />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>Fantasy</Text>
        </View>
                      
        <View style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}>
          <Feather name='book' size={30} color="purple" />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>Dystopian</Text>
        </View>
                              
        <View style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}>
          <Feather name='book-open' size={30} color="blue" />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>Mystery</Text>
        </View>
        
        <View style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}>
          <Feather name='bookmark' size={30} color="yellow" />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>Horror</Text>
        </View>
    
      {/* {items.map((item, index) => (
        <View
          style={{ alignItems: "center", marginRight: 20, marginLeft: 6 }}
          key={index}
        >
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))} */}
    </ScrollView>
  );
};

export default Categories;
