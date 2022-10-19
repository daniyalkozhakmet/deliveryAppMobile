import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import Categories from "../components/Home/Categories";
import RestaurantItems from "../components/Home/RestaurantItems";
import SearchBarSimple from "../components/Home/SearchBarSimple";
import { ActivityIndicator } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/Home/BottomTabs";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStores,
  fetchStoresByTransaction,
} from "../redux/features/store/storeSlice";
export default function Home({ navigation }) {
  const [city, setCity1] = useState("Detroit");
  const [activeTab, setActiveTab] = useState("Delivery");
  const { stores, loading, error } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoresByTransaction(activeTab));
  }, [activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBarSimple setCity1={setCity1} city={city} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {loading ? (
          <View
            style={{
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <RestaurantItems storeData={stores} navigation={navigation} />
        )}
      </ScrollView>
      <Divider width={1} />
        <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}
