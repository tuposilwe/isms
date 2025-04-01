import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  FadeOut,
  Easing,
  FadeInUp,
} from "react-native-reanimated";

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const SplashScreen = () => {
  const sv = useSharedValue(0);
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  React.useEffect(() => {
    scale.value = withTiming(scale.value * 2, { duration: 1000 });
    sv.value = withTiming(1, { duration, easing });
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.imageContainer}>
        <Animated.Image
          style={[style.image, scaleStyles]}
          source={require("../assets/images/logo.png")}
          resizeMode={"center"}
        />
      </View>
      <View style={style.textContainer}>
        <Animated.Text
          entering={FadeInUp.delay(1000)}
          exiting={FadeOut}
          style={style.text}
        >
          ISMS
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#10497E",
  },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  image: {
    height: 100,
    width: 90,
    position: "absolute",
  },
  textContainer: {
    marginTop: 40,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Manrope-Medium",
    letterSpacing: 1.3,
    marginTop: 60,
    fontWeight: "bold",
  },
});

export default SplashScreen;
