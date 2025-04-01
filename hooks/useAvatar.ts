import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const avatarFilename = "avatar.png";
const avatarDirectory = `${FileSystem.documentDirectory}Avatars/`;
const avatarPath = `${avatarDirectory}${avatarFilename}`;
const defaultImage = Asset.fromModule(require("@/assets/avatars/cat.jpeg")).uri;

const useAvatar = () => {
  const [image, setImage] = useState<string | null>(null);

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

  return {
    image,
    defaultImage,
    setImage,
    avatarDirectory,
    avatarPath,
  };
};

export default useAvatar;
