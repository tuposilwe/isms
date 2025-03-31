import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const avatarFilename = "avatar.png";
const avatarDirectory = `${FileSystem.documentDirectory}Avatars/`;
const avatarPath = `${avatarDirectory}${avatarFilename}`;

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const defaultImage = Asset.fromModule(
    require("@/assets/avatars/cat.jpeg")
  ).uri;

  useEffect(() => {
    const checkAndLoadAvatar = async () => {
      try {
        // Ensure the directory is correctly set up
        const dirInfo = await FileSystem.getInfoAsync(avatarDirectory);
        if (!dirInfo.exists || !dirInfo.isDirectory) {
          await FileSystem.makeDirectoryAsync(avatarDirectory, {
            intermediates: true,
          });
        }

        // Check if the avatar path exists and is wrongly a directory
        const fileInfo = await FileSystem.getInfoAsync(avatarPath);
        if (fileInfo.exists && fileInfo.isDirectory) {
          await FileSystem.deleteAsync(avatarPath, { idempotent: true });
        }

        // Load saved avatar if exists
        if (fileInfo.exists && !fileInfo.isDirectory) {
          setImage(avatarPath);
        }
      } catch (error) {
        console.error("Error loading avatar:", error);
      }
    };

    checkAndLoadAvatar();
  }, []);

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

        setImage(avatarPath);
        Alert.alert("Success", "Avatar updated successfully!");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Error", "Failed to select image. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an Image" onPress={pickImage} />
      <Image source={{ uri: image || defaultImage }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Circular avatar
  },
});

export default Profile;
