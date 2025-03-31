import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const help = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30%",
          padding: 20,
          fontSize: 29,
        }}
      >
        For Support
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Ionicons name="call" size={24} color="black" />
          <Text
            style={{
              fontWeight: "bold",
              marginLeft:7
            }}
          >
            0752 678 721 - IT Officer
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Ionicons name="call" size={24} color="black" />
          <Text
            style={{
              fontWeight: "bold",
              marginLeft:7
            }}
          >
            0741 238 952 - IT Officer
          </Text>
        </View>
      </View>
    </View>
  );
};

export default help;
