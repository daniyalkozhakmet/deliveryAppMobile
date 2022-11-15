import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import {
  remove_from_cart,
  increase_qty,
  reduce_qty,
} from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
export const CartItem = ({ title, price, image, rating, id, qty }) => {
  const [item, setItem] = useState({
    title,
    store: "Store1",
    price,
    qty,
    image,
    id,
  });
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 10,
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row", flex: 2 }}>
        <CheckImage image={item.image} id={item.id} />
        <CartContent title={item.title} store={item.store} price={item.price} />
      </View>

      <Counter
        style={{ flex: 1 }}
        qty={item.qty}
        id={item.id}
        setItem={setItem}
        item={item}
      />
    </View>
  );
};
const Counter = (props) => {
  const dispatch = useDispatch();
  const increaseQty = () => {
    dispatch(increase_qty(props.id));
    props.setItem({
      ...props.item,
      qty: props.item.qty + 1,
    });
  };
  const decreaseQty = () => {
    if (props.item.qty > 1) {
      dispatch(reduce_qty(props.id));
      props.setItem({
        ...props.item,
        qty: props.item.qty - 1,
      });
    }
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={decreaseQty}>
        <AntDesign name={"minus"} color={"#808080"} size={20} />
      </TouchableOpacity>

      <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
        {props.item.qty}
      </Text>
      <TouchableOpacity onPress={increaseQty}>
        <AntDesign name={"plus"} color="#EE4B2B" size={20} />
      </TouchableOpacity>
    </View>
  );
};
const CartContent = (props) => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Text style={{ fontWeight: "600", fontSize: 20 }}>{props.title}</Text>
      <Text style={{ fontWeight: "400", fontSize: 17, color: "#808080" }}>
        {props.store}
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 23, color: "#EE4B2B" }}>
        {props.price}
      </Text>
    </View>
  );
};
const CheckImage = (props) => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove_from_cart(id));
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <View>
        <BouncyCheckbox
          iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
          fillColor="green"
          isChecked={true}
          onPress={() => removeFromCart(props.id)}
        />
      </View>

      <Image
        resizeMode="cover"
        style={{
          height: 70,
          width: 70,
          borderRadius: 10,
          zIndex: 10,
        }}
        source={{
          uri: props.image,
        }}
      />
    </View>
  );
};
