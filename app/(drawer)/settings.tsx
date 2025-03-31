import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Switch } from "react-native-gesture-handler";

const settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleAuth = () =>
    setIsAuthenticated((previousState) => !previousState);

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
              <Text style={{ fontWeight: "900", margin: 9 }}>General</Text>
            </DataTable.Header>
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
                  <AntDesign name="earth" size={24} color="black" />
                  <Text style={{ fontWeight: "bold" }}>Language</Text>
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
                    gap: 10,
                    marginBottom: 15,
                    marginTop: 12,
                  }}
                >
                  <Ionicons name="finger-print" size={24} color="black" />
                  <Text style={{ fontWeight: "bold" }}>
                    Use Biometric Authentication
                  </Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#0d8821" }}
                    thumbColor={isAuthenticated ? "#0d8d14" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      Alert.alert(
                        "UpComming Feature",
                        "Development on Progress"
                      );
                      toggleAuth;
                    }}
                    value={isAuthenticated}
                    style={{
                      marginLeft: "20%",
                    }}
                  />
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
                    gap: 10,
                    marginBottom: 15,
                    marginTop: 12,
                  }}
                >
                  <Feather name="moon" size={24} color="black" />
                  <Text style={{ fontWeight: "bold" }}>Dark Mode</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#0d8821" }}
                    thumbColor={isEnabled ? "#0d8d14" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                      Alert.alert(
                        "UpComming Feature",
                        "Development on Progress"
                      );
                      toggleSwitch;
                    }}
                    value={isEnabled}
                    style={{
                      marginLeft: "55%",
                    }}
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                marginBottom: 15,
                marginTop: 12,
                marginLeft: 15,
              }}
            >
              <AntDesign name="staro" size={24} color="black" />
              <Text
                style={{ fontWeight: "bold", marginLeft: 10, marginRight: 80 }}
              >
                Rate Us
              </Text>

              {Array.apply(0, Array(4)).map((x, i) => {
                return (
                  <AntDesign name="star" key={i} size={24} color="#10497E" />
                );
              })}
            </View>
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
};

export default settings;
