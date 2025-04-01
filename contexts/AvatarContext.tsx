import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import React, { createContext, useEffect, useState } from "react";

const avatarFilename = "avatar.png";
const avatarDirectory = `${FileSystem.documentDirectory}Avatars/`;
const avatarPath = `${avatarDirectory}${avatarFilename}`;
const defaultImage = Asset.fromModule(require("@/assets/avatars/cat.jpeg")).uri;

type AvatarContextType = {
  image: string | null;
  setImage: (uri: string) => void;
  defaultImage: string;
  avatarDirectory: string;
  avatarPath: string;
};

export const AvatarContext = createContext<AvatarContextType | undefined>(
  undefined
);

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const checkAndLoadAvatar = async () => {
      try {
        const dirInfo = await FileSystem.getInfoAsync(avatarDirectory);
        if (!dirInfo.exists || !dirInfo.isDirectory) {
          await FileSystem.makeDirectoryAsync(avatarDirectory, {
            intermediates: true,
          });
        }

        const fileInfo = await FileSystem.getInfoAsync(avatarPath);
        if (fileInfo.exists && !fileInfo.isDirectory) {
          setImage(avatarPath);
        }
      } catch (error) {
        console.error("Error loading avatar:", error);
      }
    };

    checkAndLoadAvatar();
  }, []);

  return (
    <AvatarContext.Provider
      value={{ image, setImage, defaultImage, avatarDirectory, avatarPath }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
