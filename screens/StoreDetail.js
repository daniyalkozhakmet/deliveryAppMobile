import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { About } from "../components/StoreDetail/About";
import StoreBooks from "../components/StoreDetail/StoreBooks";
import { fetchStoreById } from "../redux/features/store/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native";
import BottomTabs from "../components/Home/BottomTabs";
import { ViewCart } from "../components/StoreDetail/ViewCart";
const StoreDetail = ({ route, navigation }) => {
  const id = route.params.store_id;
  const { store, loading, error } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoreById(id));
  }, [id]);
  return (
    <SafeAreaView>
      {loading ? (
        <View
          style={{
            height: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{ height: "100%" }}>
          <About store={store} style={{ flex: 1 }} />
          <Divider width={1.8} style={{ marginVertical: 10 }} />
          <StoreBooks foods={store.books} />
        
          <ViewCart navigation={navigation} />
          <BottomTabs navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default StoreDetail;
