import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "@/global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import { AvatarProvider } from "@/contexts/AvatarContext";
import { useEffect, useState } from "react";
import SplashScreen from "./splash";
import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "@/contexts/AuthContext";
import useAuth from "@/hooks/useAuth";
import Auth from "./auth";

function RootContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2300); // Adjust the time as needed
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : isAuthenticated ? (
    <Stack screenOptions={{ headerShown: false }} />
  ) : (
    <Auth />
  );
}

export default function RootLayout() {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
  });

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#10497E" />
        <PaperProvider>
          <AvatarProvider>
            <AuthProvider>
              <RootContent />
            </AuthProvider>
          </AvatarProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
