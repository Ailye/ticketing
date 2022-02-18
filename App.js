import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListeTicket from "./components/liste-ticket.js";
import ProjectOverview from "./components/project-overview.js";

export default function App() {
  return (
    <View style={styles.container}>
      <ProjectOverview />
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
