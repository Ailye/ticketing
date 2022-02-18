import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import ListeTicket from "./screens/liste-ticket.js";
import ProjectOverview from "./screens/project-overview.js";

export default function App() {
  return (
    <View style={styles.container}>
      <ProjectOverview />
      <ListeTicket />
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
