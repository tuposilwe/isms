import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Notifications from "expo-notifications";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Portal } from "react-native-paper";
import * as IntentLauncher from "expo-intent-launcher";
import * as Sharing from "expo-sharing";
import { Asset } from "expo-asset";

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
const asset = Asset.fromModule(require("@/assets/pdf/dummy.pdf"))

// const fileUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Replace with actual PDF URL
const fileUrl = asset.uri;
const fileName = "downloaded-file.pdf";

const FileDownloader: React.FC = () => {
  const [downloadStatus, setDownloadStatus] = useState<string>("");
  const [progressValue, setProgressValue] = useState<number>(0);
  const [downloadTask, setDownloadTask] = useState<FileSystem.DownloadResumable | null>(null);
  const [downloadedFilePath, setDownloadedFilePath] = useState<string | null>(null);

  const progress = useSharedValue(0);
  const modalPosition = useSharedValue(-100); // Initially hidden

  const sendNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: { title, body, sound: true },
      trigger: null,
    });
  };

  const showDownloadModal = () => {
    modalPosition.value = withTiming(StatusBar.currentHeight ?? 30, { duration: 300 });
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
        await sendNotification("Download Canceled", "The download was stopped.");
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
    <View style={styles.container}>
      {/* Floating Download Notification */}
      <Portal>
        <Animated.View style={[styles.downloadModal, { transform: [{ translateY: modalPosition }] }]}>
          <Text style={styles.modalText}>{downloadStatus}</Text>
          <View style={styles.progressBarBackground}>
            <Animated.View style={[styles.progressBarFill, { width: `${progressValue}%` }]} />
          </View>
          <TouchableOpacity onPress={cancelDownload} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>X</Text>
          </TouchableOpacity>
        </Animated.View>
      </Portal>

      <TouchableOpacity style={styles.button} onPress={startDownload}>
        <Text style={styles.buttonText}>Download Pdf</Text>
      </TouchableOpacity>

      {downloadedFilePath && (
        <TouchableOpacity style={styles.openButton} onPress={openFile}>
          <Text style={styles.buttonText}>Open Pdf</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    backgroundColor: "#333",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
  },
  modalText: {
    color: "white",
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
  progressBarBackground: {
    height: 5,
    width: "50%",
    backgroundColor: "#555",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
  cancelButton: {
    marginLeft: 10,
    padding: 5,
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FileDownloader;
