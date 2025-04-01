import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

interface LoadingProps {
  message?: string;
  visible: boolean;
}

const Loading = ({ message = "Loading ...", visible }: LoadingProps) => {
  const animation = useRef<LottieView>(null);

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
        }}
        source={require("@/assets/animations/loadx.json")}
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
  text: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
});
