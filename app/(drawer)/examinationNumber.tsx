import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Portal } from "react-native-paper";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import * as IntentLauncher from "expo-intent-launcher";
import * as FileSystem from "expo-file-system";
import * as Notifications from "expo-notifications";
import { Asset } from "expo-asset";
import * as Sharing from "expo-sharing";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
const asset = Asset.fromModule(require("@/assets/pdf/dummy.pdf"));

// const fileUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Replace with actual PDF URL
const fileUrl = asset.uri;
const fileName = "downloaded-file.pdf";

const examinationNumber = () => {
  const [downloadStatus, setDownloadStatus] = useState<string>("");
  const [progressValue, setProgressValue] = useState<number>(0);
  const [downloadTask, setDownloadTask] =
    useState<FileSystem.DownloadResumable | null>(null);
  const [downloadedFilePath, setDownloadedFilePath] = useState<string | null>(
    null
  );

  const progress = useSharedValue(0);
  const modalPosition = useSharedValue(-100); // Initially hidden

  const sendNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: null,
    });
  };

  const showDownloadModal = () => {
    modalPosition.value = withTiming(StatusBar.currentHeight ?? 30, {
      duration: 300,
    });
  };

  const hideDownloadModal = () => {
    modalPosition.value = withTiming(-100, { duration: 300 });
  };

  const startDownload = async () => {
    setDownloadStatus("Starting download...");
    setProgressValue(0);
    showDownloadModal();

    const downloadPath = `${FileSystem.documentDirectory}${fileName}`;

    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        fileUrl,
        downloadPath,
        {},
        (downloadProgress) => {
          const progressPercent =
            (downloadProgress.totalBytesWritten /
              downloadProgress.totalBytesExpectedToWrite) *
            100;

          progress.value = withTiming(progressPercent, { duration: 200 });
          setProgressValue(progressPercent);
          setDownloadStatus(`Downloading... ${Math.round(progressPercent)}%`);
        }
      );

      setDownloadTask(downloadResumable);
      const { uri } = await downloadResumable.downloadAsync();

      setDownloadedFilePath(uri); // Save the downloaded file path

      setDownloadStatus("Download complete!");
      await sendNotification("Download Complete", "File saved successfully!");

      setTimeout(hideDownloadModal, 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadStatus(`Error: ${(error as Error).message}`);
      await sendNotification("Download Failed", "Could not download the file.");
      hideDownloadModal();
    }
  };

  const cancelDownload = async () => {
    if (downloadTask) {
      try {
        await downloadTask.cancelAsync();
        setDownloadStatus("Download canceled");
        await sendNotification(
          "Download Canceled",
          "The download was stopped."
        );
      } catch (error) {
        console.error("Cancel failed:", error);
      } finally {
        hideDownloadModal();
      }
    }
  };

  const openFile = async () => {
    if (!downloadedFilePath) return;

    try {
      if (Platform.OS === "android") {
        const uri = await FileSystem.getContentUriAsync(downloadedFilePath);
        await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
          data: uri,
          flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        });
      } else {
        await Sharing.shareAsync(downloadedFilePath);
      }
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#10497E",
          padding: 10,
          borderRadius: 15,
        }}
        onPress={startDownload}
      >
        <Text style={{ fontWeight: "bold", color: "white", marginRight: 5 }}>
          Print
        </Text>
        <FontAwesome name="print" size={14} color="white" />
      </TouchableOpacity>

      {downloadedFilePath && (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#28A745",
            padding: 10,
            borderRadius: 15,
            marginTop:10
          }}
          onPress={openFile}
        >
          <Text
            style={{ fontWeight: "bold", color: "white", marginRight: 5 }}
          >
            Open PDF
          </Text>
          <FontAwesome name="print" size={14} color="white" />
        </TouchableOpacity>
      )}
      <Portal>
        <Animated.View
          style={[
            styles.downloadModal,
            { transform: [{ translateY: modalPosition }] },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            {downloadStatus === "Download complete!" ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <MaterialIcons name="download-done" size={24} color="white" />
                <Text style={styles.modalText}>{downloadStatus}</Text>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 10,
                }}
              >
                <MaterialIcons name="file-download" size={24} color="white" />
                <Text style={styles.modalText}>{downloadStatus}</Text>
              </View>
            )}
            <TouchableOpacity onPress={cancelDownload} style={{ margin: 10 }}>
              <MaterialIcons
                name="cancel-presentation"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.progressBarBackground}>
            <Animated.View
              style={[styles.progressBarFill, { width: `${progressValue}%` }]}
            />
          </View>
        </Animated.View>
      </Portal>
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
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  openButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  downloadModal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#333333",
    // padding: 10,
    margin: 15,
    borderRadius: 9,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    zIndex: 1000,
  },
  modalText: {
    color: "white",
    fontSize: 14,
    flex: 1,
    margin: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 5,
    width: "90%",
    backgroundColor: "#555",
    borderRadius: 3,
    overflow: "hidden",
    // marginRight: 20,
    margin: 10,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
