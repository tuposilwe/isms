import CustomDrawerContent from "@/components/CustomDrawerContent";
import icons from "@/constants/icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {
  default as FontAwesome,
  default as FontAwesomeIcon,
} from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";

const Layout = () => {
  return (
    <Drawer
      backBehavior="history"
      screenOptions={({ navigation }) => ({
        drawerType: "back",
        headerStyle: {
          backgroundColor: "#10497E",
        },
        swipeEnabled: true,
        swipeEdgeWidth: 10,
        headerTitleStyle: {
          color: "#ffff",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={24}
            color="#fff"
            onPress={navigation.openDrawer}
            className="p-2 ml-2"
          />
        ),
      })}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="index"
        options={({ navigation }) => ({
          drawerLabel: "Isms",
          title: "ISMS",
          drawerIcon: ({ size, color }) => (
            <FontAwesomeIcon name="home" size={size} color={color} />
          ),

          headerRight: () => (
            <Image
              source={icons.bell}
              className="size-8 mr-2"
              style={{ tintColor: "#ffffff" }}
            />
          ),
          headerLeft: () => (
            <FontAwesome6
              name="bars-staggered"
              size={24}
              color="#fff"
              onPress={navigation.openDrawer}
              className="p-2 ml-2"
            />
          ),
        })}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerLabel: "MyProfile",

          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="payments"
        options={{
          title: "Payments",
          drawerLabel: "Payments",
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="money" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="examinationNumber"
        options={{
          title: "Examination Number",
          drawerLabel: "Examination Number",
          drawerIcon: ({ size, color }) => (
            <Foundation name="list-number" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="results"
        options={{
          title: "Results",
          drawerLabel: "Results",
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="graduation-cap" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="changePassword"
        options={{
          title: "Change Password",
          drawerLabel: "changePassword",
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="key" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="help"
        options={{
          title: "Help",
          drawerLabel: "Help",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="help-circle" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          title: "About",
          drawerLabel: "About",
          drawerIcon: ({ size, color }) => (
            <Entypo name="info" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;
