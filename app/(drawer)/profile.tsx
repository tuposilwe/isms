import useAvatar from "@/hooks/useAvatar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DataTable } from "react-native-paper";

type AndroidMode = "date" | "time";

const Profile = () => {
  const { image, setImage, defaultImage, avatarDirectory, avatarPath } =
    useAvatar();
  const [date, setDate] = useState(new Date("1999-03-25"));

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setDate(currentDate!);
  };

  const showMode = (currentMode: AndroidMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: "spinner",
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;

        // Ensure the directory exists
        const dirInfo = await FileSystem.getInfoAsync(avatarDirectory);
        if (!dirInfo.exists || !dirInfo.isDirectory) {
          await FileSystem.makeDirectoryAsync(avatarDirectory, {
            intermediates: true,
          });
        }

        // Ensure avatarPath is not a directory
        const fileInfo = await FileSystem.getInfoAsync(avatarPath);
        if (fileInfo.exists && fileInfo.isDirectory) {
          await FileSystem.deleteAsync(avatarPath, { idempotent: true });
        }

        // Copy the selected image to avatarPath
        await FileSystem.copyAsync({
          from: selectedImage,
          to: avatarPath,
        });

        setImage(selectedImage);
        Alert.alert("Success", "Avatar updated successfully!");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Error", "Failed to select image. Please try again.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            margin: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image && (
            <Image
              source={{ uri: image || defaultImage }}
              style={styles.image}
            />
          )}
          <TouchableOpacity
            style={{
              position: "relative",
              left: 80,
              top: -29,
            }}
            onPress={pickImage}
          >
            <FontAwesome5 name="edit" size={24} color="#0a4a86" />
          </TouchableOpacity>
          <Text
            style={{ fontWeight: "bold", fontSize: 15, fontStyle: "italic" }}
          >
            {" "}
            REECE NELSON MANDELA
          </Text>
          <Text style={{ marginLeft: 10, fontStyle: "italic" }}>
            {" "}
            DTA/0014/2018
          </Text>

          <View style={{ flex: 1, width: "100%" }}>
            <View
              style={{
                height: "100%",
                // borderTopLeftRadius: 18,
                // borderTopRightRadius: 20,
                padding: 16,
              }}
            >
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={{ fontWeight: "900", marginLeft: 9 }}>
                      Programme: DataScience Specialist
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
                      <Text style={{ fontWeight: "bold" }}>Date of Birth</Text>
                      <TextInput
                        style={{
                          borderColor: "#b7b8c0",
                          borderWidth: 0.5,
                          flex: 1,
                        }}
                        onPress={showDatepicker}
                        cursorColor="black"
                        placeholder={date.toLocaleDateString("af-ZA")}
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
                      <Text style={{ fontWeight: "bold" }}>Index ID</Text>
                      <TextInput
                        style={{
                          borderColor: "#b7b8c0",
                          borderWidth: 0.5,
                          flex: 1,
                        }}
                        placeholder="Sxxx-xxx-xxx"
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
                      <Text style={{ fontWeight: "bold" }}>Phone Number</Text>
                      <TextInput
                        style={{
                          borderColor: "#b7b8c0",
                          borderWidth: 0.5,
                          flex: 1,
                        }}
                        inputMode="tel"
                        placeholder="+255-xxx-xxx-xxx"
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
                        padding: 10,
                        margin: 15,
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
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,

    // Circular avatar
  },
  container2: {
    // padding: 16,
    flex: 1,
    // backgroundColor: "#fff",
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
    flex: 1,
    justifyContent: "center",
    // marginTop:10,
    marginBottom: 70,
    // marginRight:10,
    padding: 10,
    margin: 5,
    height: 18,

    // paddingVertical: 8,
    // paddingHorizontal: 14,
    backgroundColor: "#a80303",
    // backgroundColor: "#f4f4f4",
    // marginBottom: 16,
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
