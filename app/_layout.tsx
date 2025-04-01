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

export default function RootLayout() {
  // This is the default configuration
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#10497E" />
        <AvatarProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AvatarProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
