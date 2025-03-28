import {
    default as FontAwesomeIcon
} from "@expo/vector-icons/FontAwesome";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { BackHandler, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomDrawerContent = (props: any) => {
  const { bottom } = useSafeAreaInsets();

const closeApp = () => {
    console.log('App Closed');
    return BackHandler.exitApp();
}

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable onPress={closeApp} style={{ flexDirection:"row",alignContent:"flex-start",alignItems:"center",padding: 20, paddingLeft:15,paddingBottom: bottom + 10 }}>
        <FontAwesomeIcon name="power-off" size={24} color="red" style={{marginLeft: 10}} />
        <Text style={{marginLeft:20}}>logout</Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerContent;
