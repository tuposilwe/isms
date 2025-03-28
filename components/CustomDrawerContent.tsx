import { default as FontAwesomeIcon } from "@expo/vector-icons/FontAwesome";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { BackHandler, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props: any) => {
  const { bottom } = useSafeAreaInsets();

  const closeApp = () => {
    console.log("App Closed");
    return BackHandler.exitApp();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View style={styles.profileCircle}>
            {/* <Image source={require("@/assets/images/nelson.jpg")}/> */}
            <Text style={styles.profileText}>RN</Text>
          </View>
          <Text style={styles.text}>Welcome, Reece Nelson</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable
        onPress={closeApp}
        style={{
          flexDirection: "row",
          alignContent: "flex-start",
          alignItems: "center",
          padding: 20,
          paddingLeft: 15,
          paddingBottom: bottom + 10,
        }}
      >
        <FontAwesomeIcon
          name="power-off"
          size={24}
          color="red"
          style={{ marginLeft: 10 }}
        />
        <Text style={{ marginLeft: 20 }}>logout</Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  profileCircle: {
    width: 100,
    height: 100,
    backgroundColor: "#10497E",
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontFamily: "PoppinsBold",
    fontSize: 42,
  },
  text: {
    fontFamily: "PoppinsBold",
    marginTop: 15,
    fontSize: 18,
  },
});