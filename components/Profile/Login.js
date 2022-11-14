import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login } from "../../redux/features/user/userSlice";
import ProfileTab from "./ProfileTab";
import { ScrollView } from "react-native";
export const Login = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Login");
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/shopping-bag.png")}
        resizeMode="contain"
      />
      <ProfileTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <StatusBar style="auto" />
      <ScrollView style={{ width: "100%" }}>
        <View style={{ marginBottom: 70 }}>
          {activeTab == "Login" ? <SignIn /> : <SignUp />}
        </View>
      </ScrollView>
    </View>
  );
};
const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    dispatch(login({ email, password }));
  };
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an email.."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={(e) => loginHandler()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const registerHandler = () => {
    console.log({ email, firstName, lastName, password1, password2 });
    // dispatch(login({ email, password }));
  };
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an first name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an last name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an email.."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password1) => setPassword1(password1)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm a password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={(e) => registerHandler()}
      >
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },

  image: {
    marginBottom: 40,
    width: "50%",
    height: "20%",
  },

  inputView: {
    backgroundColor: "#FFDDD2",
    borderRadius: 30,
    width: "75%",
    height: 45,
    marginBottom: 10,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "85%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF6464",
  },
});
