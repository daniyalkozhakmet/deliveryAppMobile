import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import BottomTabs from "../components/Home/BottomTabs";
import HeaderTabs from "../components/Home/HeaderTabs";
import Categories from "../components/Home/Categories";
import { SearchBarName } from "../components/Books/SearchBarName";
import { BookItem } from "../components/Books/BookItem";
import { ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks, fetchBooksByName } from "../redux/features/book/bookSlice";
export const Books = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { loading, error, books } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(fetchBooks({ transaction: activeTab }));
  }, [activeTab]);
  useEffect(() => {
    dispatch(fetchBooksByName({ name }));
  }, [name]);
  return (
    <SafeAreaView>
      <View style={{ height: "96%" }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBarName setName={setName} name={name} />
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
            <View>
              {books.map((book) => (
                <BookItem book={book} id={book.id} />
              ))}
            </View>
          )}
        </ScrollView>
      </View>

      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};
