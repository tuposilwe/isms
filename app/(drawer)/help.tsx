import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DataTable } from "react-native-paper";

const help = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                marginBottom: 15,
                marginTop: 12,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>For Support (Contact)</Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="call" size={24} color="#10497E" />
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                0741 238 952 - IT Officer
              </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="call" size={24} color="#10497E" />
              <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
                0741 238 952 - IT Officer
              </Text>
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default help;
