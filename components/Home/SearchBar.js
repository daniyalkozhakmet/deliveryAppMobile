import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, Entypo, AntDesign } from "react-native-vector-icons";
const SearchBar = ({setCity}) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyD88f_NTm_ClwARC8bQZ0Ha55FGBLoNaoE" }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            marginTop: 7,
            fontWeight: "700",
            borderRadius: 20,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        onPress={(data, details = null) => {
          const city=data.description.split(',')[0]
          setCity(city);
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 4 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
