import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const examinationNumber = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Ionicons
            name="school-sharp"
            size={24}
            color="black"
            style={{ marginRight: 3 }}
          />
          <Text style={styles.infoText}>REECE NELSON MANDELA</Text>
        </View>
        <View style={styles.row}>
          <Feather
            name="clock"
            size={20}
            color="black"
            style={{ marginRight: 3 }}
          />
          <Text style={styles.infoText}>Year of Study: 1</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="level-up"
            size={20}
            color="black"
            style={{ marginRight: 3 }}
          />
          <Text style={styles.infoText}>NTA Level: 8</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="calendar"
            size={20}
            color="black"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.infoText}>Academic Year: 2023/2024</Text>
        </View>
        <View style={styles.row}>
          <AntDesign
            name="copy1"
            size={24}
            color="black"
            style={{ marginRight: 3 }}
          />

          <Text style={styles.infoText}>TEST NUMBER: T4/DTA/511529</Text>
        </View>
        <View style={styles.row}>
          <Entypo
            name="location"
            size={24}
            color="black"
            style={{ marginRight: 3 }}
          />

          <Text style={styles.infoText}>Venue: TWIGA-8</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection:"row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10497E",
          padding: 10,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontWeight: "bold",color:"white",marginRight:5 }}>Print</Text>
        <FontAwesome name="print" size={14} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default examinationNumber;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  tableHeader: {
    backgroundColor: "#F5F5F5",
    marginTop: 5,
  },
  header: {
    backgroundColor: "#B71C1C",
    borderRadius: 4,
  },
  modalContent: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 20,
    padding: 16,
  },
  infoContainer: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#f4f4f4",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  infoText: {
    fontWeight: "bold",
    marginLeft: 14,
    fontSize: 20,
    color: "#535151",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    borderRadius: 4,
  },
  disabledButton: {
    backgroundColor: "#D3D3D3",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
