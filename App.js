import Home from "./screens/Home";
import StoreDetail from "./screens/StoreDetail";
import { Books } from "./screens/Books";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BottomTabs from "./components/Home/BottomTabs";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
