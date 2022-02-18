import React, { useState } from "react";
import { Dimensions } from "react-native";

import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import SelectDropdown from "react-native-select-dropdown";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
const dropdownData = ["All Projects", "ticketing", "Project 2"];
const defaultTasks = [
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH", "Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task2",
    project: "ticketing",
    status: "Done",
    assignee: ["Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task3",
    project: "ticketing",
    status: "In progress",
    assignee: ["Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task4",
    project: "ticketing",
    status: "Done",
    assignee: ["PH"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
  {
    subject: "task1",
    project: "ticketing",
    status: "In progress",
    assignee: ["PH, Loch"],
    dueDate: "18/02/2022",
  },
];
const routes = ["project-overview", "login"];

export default ({ navigation }) => {
  const [tasks, setTasks] = useState(defaultTasks);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          source={require("../assets/travaux-routiers.png")}
          style={styles.img}
        />
        <Text style={styles.titre1}>Tasks</Text>
        {/* <Image source={require("../assets/menu.png")} style={styles.img} /> */}
        <SelectDropdown
          data={routes}
          onSelect={(selectedItem, index) => {
            navigation.navigate(selectedItem);
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.options}>
          <SelectDropdown
            data={dropdownData}
            onSelect={(selectedItem, index) => {
              if (selectedItem === "All Projects") {
                setTasks(defaultTasks);
              } else if (selectedItem === "ticketing") {
                setTasks(
                  defaultTasks.filter((task) => task.project === "ticketing")
                );
              } else if (selectedItem === "Project 2") {
                setTasks(
                  defaultTasks.filter((task) => task.project === "Project 2")
                );
              }
            }}
          />
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              onPress={(isChecked) => {
                if (isChecked) {
                  setTasks(
                    defaultTasks.filter((task) => task.assignee.includes("PH"))
                  );
                } else setTasks(defaultTasks);
              }}
            />
            <Text>Assigne to me only</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              onPress={(isChecked) => {
                if (isChecked) {
                  setTasks(
                    defaultTasks.filter((task) => task.status !== "Done")
                  );
                } else setTasks(defaultTasks);
              }}
            />
            <Text>Hide done</Text>
          </View>
        </View>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            keyExtractor={(itemData, index) => index}
            renderItem={(itemData) => {
              return (
                <View style={styles.task}>
                  <Text>Subject : {itemData.item.subject}</Text>
                  <Text>Project : {itemData.item.project}</Text>
                  <Text>Status : {itemData.item.status}</Text>
                  <Text>
                    Assignee :{" "}
                    {itemData.item.assignee.map((assignee, key) => {
                      return <Text key={key}> {assignee} </Text>;
                    })}{" "}
                  </Text>
                  <Text>Due date : {itemData.item.dueDate}</Text>
                </View>
              );
            }}
          />
        </View>
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
  img: {
    width: 40,
    height: 40,
  },
  body: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
  },
  options: {
    // Margin bot ?
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  list: {
    paddingTop: 10,
  },
  task: {
    padding: 10,
  },
});
