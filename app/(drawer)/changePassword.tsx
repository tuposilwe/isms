import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";

const changePassword = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 18,
          borderTopRightRadius: 20,
          padding: 16,
        }}
      >
        <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={{ fontWeight: "900", marginLeft: 9 }}>
                  Your new password should have at least 8 characters
                </Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    gap: 10,
                    marginBottom: 15,
                    marginTop: 12,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>New Password</Text>
                  <TextInput
                    style={{
                      borderColor: "#b7b8c0",
                      borderWidth: 0.5,
                      flex: 1,
                    }}
                    cursorColor="black"
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    gap: 10,
                    marginBottom: 15,
                    marginTop: 12,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>New Password Again</Text>
                  <TextInput
                    style={{
                      borderColor: "#b7b8c0",
                      borderWidth: 0.5,
                      flex: 1,
                    }}
                    cursorColor="black"
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#10497E",
                    padding: 20,
                    margin: 29,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "70%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
};

export default changePassword;
