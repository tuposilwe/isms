import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, DataTable } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

const subjects = [
  {
    id: "1",
    name: "Information Systems Security and Auditing",
    code: "CYU08209",
  },
  { id: "2", name: "Database Security", code: "CYU08212" },
  { id: "3", name: "Cryptology and Coding Theory", code: "CYU08211" },
  { id: "4", name: "Cryptology and Coding Theory", code: "CYU08211" },
  { id: "5", name: "Database Security", code: "CYU08212" },
  { id: "6", name: "Digital Forensic", code: "CYU08210" },
  { id: "7", name: "Social and Ethical Issues in Computing", code: "CYU08207" },
  { id: "8", name: "Individual Project", code: "CYU08208" },
];

const HomeTable = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Feather
            name="clock"
            size={15}
            color="black"
            style={{
              marginRight: 3,
            }}
          />
          <Text style={styles.infoText}>Year of Study: 1</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="level-up"
            size={15}
            color="black"
            style={{
              marginRight: 3,
            }}
          />
          <Text style={styles.infoText}> NTA Level: 8</Text>
        </View>

        <View style={styles.row}>
          <FontAwesome
            name="calendar"
            size={14}
            color="black"
            style={{
              marginRight: 4,
            }}
          />
          <Text style={styles.infoText}>Academic Year: 2023/2024</Text>
        </View>
      </View>

      {/* Header Bar */}
      <Appbar.Header style={styles.header}>
        <Appbar.Content
          title="Summative Evaluation"
          titleStyle={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          style={{
            marginBottom: 20,
            padding: 10,
            borderRadius: 10,
          }}
        />
      </Appbar.Header>

      {/* Table */}
      <DataTable>
        {/* Table Header */}
        <DataTable.Header style={styles.tableHeader}>
          {/* <DataTable.Title>#</DataTable.Title> */}
          <DataTable.Title style={{ flex: 2 }}>Subject Name</DataTable.Title>
          <DataTable.Title>Code</DataTable.Title>
        </DataTable.Header>

        {/* Table Rows */}
        {subjects.map((item) => (
          <DataTable.Row key={item.id}>
            {/* <DataTable.Cell>{item.id}</DataTable.Cell> */}
            <DataTable.Cell style={{ flex: 2 }}>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.code}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default HomeTable;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  tableHeader: {
    backgroundColor: "#F5F5F5",
    marginTop:5
  },
  header: {
    backgroundColor: "#B71C1C",
    borderRadius:4
  },
  infoContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  row: {
    flexDirection: "row", // Ensures items are on the same line
    alignItems: "center", // Aligns icon and text vertically
    justifyContent: "flex-start",
  },
});
