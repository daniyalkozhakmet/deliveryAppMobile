import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";
export const ProfileAfter = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <View
          style={{ flex: 1, justifyContent: "space-between", height: "100%" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Image
              resizeMode="cover"
              style={{ height: "100%", width: "100%" }}
              source={{
                uri: "https://wellness.mcmaster.ca/app/uploads/2021/10/Untitled-design-17-720x405.png",
              }}
            />
            <Image
              resizeMode="cover"
              style={{
                height: 150,
                width: 150,
                borderRadius: "80%",
                position: "absolute",
                bottom: -50,
                left: "50%",
                zIndex: 10,
                transform: [{ translateX: -75 }],
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYPEOg7CvtKJ-58Giji0w5MwatIVVnFD9AKm9sCY&s",
              }}
            />
          </View>

          <View
            style={{
              flex: 2,
              backgroundColor: "white",
              paddingTop: 50,
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "colunb",
              }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "600", marginBottom: 10 }}
              >
                John Doe
              </Text>
              <Button title={" Edit Profile "} />
            </View>

            <ScrollView style={{ paddingHorizontal: 30, marginTop: 20 }}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 7,
                    paddingBottom: 4,
                  }}
                >
                  <Text style={{ fontWeight: "400", fontSize: 20 }}>Phone</Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#808080",
                    }}
                  >
                    8-697-38-57
                  </Text>
                </View>

                <Divider width={1} />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 7,
                    paddingBottom: 4,
                  }}
                >
                  <Text style={{ fontWeight: "400", fontSize: 20 }}>Phone</Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#808080",
                    }}
                  >
                    8-697-38-57
                  </Text>
                </View>

                <Divider width={1} />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 7,
                    paddingBottom: 4,
                  }}
                >
                  <Text style={{ fontWeight: "400", fontSize: 20 }}>Phone</Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      color: "#808080",
                    }}
                  >
                    8-697-38-57
                  </Text>
                </View>

                <Divider width={1} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
