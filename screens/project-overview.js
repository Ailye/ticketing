import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import SelectDropdown from "react-native-select-dropdown";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

const mockProject = {
  advancement: "60",
  status: "In progress",
};

const data = {
  labels: ["Project 1", "Project 2", "Project 3"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const routes = ["liste-ticket", "login"];

export default ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          source={require("../assets/travaux-routiers.png")}
          style={styles.img}
        />
        <Text style={styles.titre1}>Project Overview</Text>
        {/* <Image source={require("../assets/menu.png")} style={styles.img} /> */}
        <SelectDropdown
          data={routes}
          onSelect={(selectedItem, index) => {
            navigation.navigate(selectedItem);
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.titre2}>Acme Project</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Advancement : {mockProject.advancement}
          </Text>
          <Text style={styles.text}>Status : {mockProject.status} </Text>
        </View>
        <BarChart
          data={data}
          style={styles.chart}
          width={width - 60}
          height={220}
          yAxisLabel=""
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          verticalLabelRotation={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    padding: 10,
    // paddingRight ???
    width: width,
    height: height,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
  },
  titre1: { fontSize: 24 },
  titre2: { fontSize: 20 },
  img: {
    width: 40,
    height: 40,
  },
  body: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
  },
  textContainer: {},
  text: {
    fontSize: 18,
  },
  chart: {
    padding: 30,
  },
});
