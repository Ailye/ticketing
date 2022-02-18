import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListeTicket from "./components/liste-ticket.js";
import ProjectOverview from "./components/project-overview.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="liste-ticket">
        <Stack.Screen
          name="liste-ticket"
          component={ListeTicket}
        ></Stack.Screen>
        <Stack.Screen
          name="project-overview"
          component={ProjectOverview}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
