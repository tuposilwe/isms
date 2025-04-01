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

export default function RootLayout() {
  // This is the default configuration
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2300); // Adjust the time as needed
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#10497E" />
        <PaperProvider>
          <AvatarProvider>
            {isLoading ? (
              <SplashScreen />
            ) : (
              <Stack screenOptions={{ headerShown: false }} />
            )}
          </AvatarProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
