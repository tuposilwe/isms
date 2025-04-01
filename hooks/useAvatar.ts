import { AvatarContext } from "@/contexts/AvatarContext";
import { useContext } from "react";

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within an AvatarProvider");
  }
  return context;
};

export default useAvatar;
