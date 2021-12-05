import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Main from "./Main";
import Weekly from "./Weekly";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Main />*/}
      <Weekly />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee9e0",
    // margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

