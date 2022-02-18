import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import AppButton from "../components/AppButton";
import Logo from "../assets/alogo-2.png";

const LoginScreen = () => {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="email@company.com"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      />
      <AppButton title="Login" color="#e74c3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center"
  }
});

export default LoginScreen;
