import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({ message = "Loading ..." }: { message?: string }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#066341" />
    <Text style={styles.text}>{message}</Text>
  </View>
);

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  text: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
});
