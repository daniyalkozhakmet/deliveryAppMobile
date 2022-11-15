import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "react-native-vector-icons";
export const ProgressBar = ({ navigation, step = 1 }) => {
  return (
    <View style={{ height: 70 }}>
      <View
        style={{
          height: "100%",
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name={"left"} size={25} />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          {new Array(3).fill(undefined).map((val, idx) =>
            idx < step ? (
              <TouchableOpacity key={idx}>
                <View
                  key={idx}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                    backgroundColor: idx < step ? "#FFDDD2" : "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: idx < step ? "black" : "#FFDDD2",
                      fontSize: 24,
                    }}
                  >
                    {idx + 1}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                key={idx}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  backgroundColor: idx < step ? "#FFDDD2" : "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: idx < step ? "black" : "#FFDDD2",
                    fontSize: 24,
                  }}
                >
                  {idx + 1}
                </Text>
              </View>
            )
          )}
        </View>
        <View>
          <Entypo name="address" size={25} />
        </View>
      </View>
    </View>
  );
};
