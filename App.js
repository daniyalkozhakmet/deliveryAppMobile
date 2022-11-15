import Home from "./screens/Home";
import StoreDetail from "./screens/StoreDetail";
import { Books } from "./screens/Books";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ProfileBefore } from "./screens/ProfileBefore";
import { Login } from "./components/Profile/Login";
import BottomTabs from "./components/Home/BottomTabs";
import { ProfileAfter } from "./screens/ProfileAfter";
import { View } from "react-native";
import { CartScreen } from "./screens/CartScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddressScreen } from "./screens/AddressScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="StoreDetail" component={StoreDetail} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="Profile" component={ProfileBefore} />
            <Stack.Screen name="Register" component={Login} />
            <Stack.Screen name="ProfileAfter" component={ProfileAfter} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Address" component={AddressScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
