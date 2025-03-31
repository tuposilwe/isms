import useSettings from "@/hooks/useSettings";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useMemo, useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";

// Sample Subjects Data
const initialSubjects = [
  {
    id: "1",
    name: "Information Systems Security and Auditing",
    code: "CYU08209",
    complete: true,
  },
  { id: "2", name: "Database Security", code: "CYU08212", complete: false },
  {
    id: "3",
    name: "Cryptology and Coding Theory",
    code: "CYU08211",
    complete: false,
  },
  { id: "4", name: "Digital Forensic", code: "CYU08210", complete: false },
  {
    id: "5",
    name: "Social and Ethical Issues in Computing",
    code: "CYU08207",
    complete: false,
  },
  { id: "6", name: "Individual Project", code: "CYU08208", complete: true },
];

const evaluationCategories = [
  "Attendance",
  "Punctuality",
  "Preparedness & Mastery of the Subject",
  "Encouraging Student's Participation",
];

const HomeTable = () => {
  const { isModalVisible, toggleModal } = useSettings();
  const [subjects, setSubjects] = useState(initialSubjects);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedMarks, setSelectedMarks] = useState<Record<string, string>>(
    {}
  );

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      { id: "1", label: "1", value: "Poor" },
      { id: "2", label: "2", value: "Satisfactory" },
      { id: "3", label: "3", value: "Good" },
      { id: "4", label: "4", value: "Very Good" },
      { id: "5", label: "5", value: "Excellent" },
    ],
    []
  );

  const getValueById = (id: string): string | undefined => {
    return radioButtons.find((button) => button.id === id)?.value;
  };

  // Open modal and set selected subject if not complete
  const openEvaluationModal = (subjectName: string) => {
    const subject = subjects.find((s) => s.name === subjectName);
    if (subject) {
      if (subject.complete) {
        // Show alert if the subject is already complete
        Alert.alert(
          "Already Evaluated",
          `The subject "${subjectName}" has already been evaluated.`
        );
      } else {
        setSelectedSubject(subjectName);
        setSelectedMarks({});
        toggleModal();
      }
    }
  };

  // Handle Radio Button Selection for Each Category
  const handleSelectMark = (category: string, id: string) => {
    setSelectedMarks((prev) => {
      const updatedMarks = { ...prev, [category]: id };
      updateSubjectStatus(selectedSubject!, updatedMarks);
      return updatedMarks;
    });
  };

  // Update Subject Status if All Categories are Marked
  const updateSubjectStatus = (
    subjectName: string,
    updatedMarks: Record<string, string>
  ) => {
    const allMarked = evaluationCategories.every(
      (category) => updatedMarks[category]
    );

    if (allMarked) {
      setSubjects((prevSubjects) =>
        prevSubjects.map((subject) =>
          subject.name === subjectName
            ? { ...subject, complete: true }
            : subject
        )
      );
    }
  };

  // Save the evaluation (close modal)
  const saveEvaluation = () => {
    // You can implement the actual save logic here (e.g., API call or local storage)
    toggleModal();
  };

  // Check if all categories are marked
  const isSaveDisabled =
    Object.keys(selectedMarks).length < evaluationCategories.length;

  return (
    <ScrollView style={styles.container}>
      {/* Info Section */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Feather
            name="clock"
            size={15}
            color="black"
            style={{ marginRight: 3 }}
          />
          <Text style={styles.infoText}>Year of Study: 1</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="level-up"
            size={15}
            color="black"
            style={{ marginRight: 3 }}
          />
          <Text style={styles.infoText}>NTA Level: 8</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome
            name="calendar"
            size={14}
            color="black"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.infoText}>Academic Year: 2023/2024</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#B71C1C",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          marginBottom: 3,
        }}
      >
        <Text style={{ color: "white" }}>SUMMATIVE EVALUATION</Text>
      </View>

      {/* Table */}
      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title style={{ flex: 4 }}>Subject Name</DataTable.Title>
          <DataTable.Title style={{ flex: 2 }}>Code</DataTable.Title>
        </DataTable.Header>

        {subjects.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => openEvaluationModal(item.name)}
          >
            <DataTable.Row>
              <DataTable.Cell>
                {item.complete ? (
                  <Ionicons name="checkmark-sharp" size={20} color="green" />
                ) : (
                  <Entypo name="warning" size={20} color="red" />
                )}
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 4 }}>{item.name}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 2 }}>{item.code}</DataTable.Cell>
            </DataTable.Row>
          </Pressable>
        ))}
      </DataTable>

      {/* Modal for Evaluation */}
      <Modal
        animationType="slide"
        visible={isModalVisible}
        transparent={true}
        onDismiss={() => toggleModal()}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Pressable
                onPress={() => toggleModal()}
                style={{ alignSelf: "flex-end" }}
              >
                <MaterialIcons name="cancel" size={24} color="black" />
              </Pressable>

              {/* Display Selected Subject Name */}
              <Text style={styles.modalTitle}>{selectedSubject}</Text>

              <Text style={{ fontWeight: "900" }}>
                Evaluation of Teaching-Learning Process
              </Text>
              <Text>(Please tick the appropriate box)</Text>
              <Text style={{ fontWeight: "300" }}>
                KEY: 1 - Poor, 2 - Satisfactory, 3 - Good, 4 - Very Good, 5 -
                Excellent
              </Text>

              <DataTable>
                <DataTable.Header style={styles.tableHeader}>
                  <DataTable.Title>Category</DataTable.Title>
                  <DataTable.Title>Mark</DataTable.Title>
                  <DataTable.Title>Status</DataTable.Title>
                </DataTable.Header>

                {evaluationCategories.map((category) => (
                  <DataTable.Row key={category}>
                    <DataTable.Cell>
                      <Text numberOfLines={0} style={{ flexShrink: 1 }}>
                        {category}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <RadioGroup
                        radioButtons={radioButtons}
                        layout="column"
                        onPress={(id) => handleSelectMark(category, id)}
                        selectedId={selectedMarks[category]}
                      />
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {selectedMarks[category]
                        ? getValueById(selectedMarks[category]!)
                        : "None"}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>

              {/* Save Button */}
              <Pressable
                onPress={saveEvaluation}
                disabled={isSaveDisabled}
                style={[
                  styles.saveButton,
                  isSaveDisabled && styles.disabledButton,
                ]}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeTable;

// Styles
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
