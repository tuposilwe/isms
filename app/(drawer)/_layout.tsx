import CustomDrawerContent from "@/components/CustomDrawerContent";
import icons from "@/constants/icons";
import useSettings from "@/hooks/useSettings";
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
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Drawer } from "expo-router/drawer";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("screen");

const Layout = () => {
  const { isModalVisible, toggleModal } = useSettings();

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
            <>
              <TouchableOpacity
                style={{ position: "relative", marginRight: 10 }}
                onPress={() => toggleModal()}
              >
                <Image
                  source={icons.bell}
                  className="size-8"
                  style={{ tintColor: "#ffffff" }}
                />
                {/* Notification Badge */}
                <View
                  style={{
                    position: "absolute",
                    right: -5,
                    top: -5,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>1</Text>
                </View>
              </TouchableOpacity>
              <Modal
                statusBarTranslucent={true}
                onBackdropPress={() => toggleModal()}
                isVisible={isModalVisible}
                onDismiss={() => toggleModal()}
                deviceHeight={height}
                deviceWidth={width}
                style={{
                  margin: 4,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "100%",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",

                      backgroundColor: "white",
                      borderTopLeftRadius: 18,
                      borderTopRightRadius: 20,
                      padding: 16,
                    }}
                  >
                    <ScrollView>
                      <Pressable
                        onPress={() => toggleModal()}
                        style={{ alignSelf: "flex-end" }}
                      >
                        <MaterialIcons name="cancel" size={24} color="black" />
                      </Pressable>

                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Notifications
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",

                          marginTop: 20,
                          borderRadius: 10,
                          borderWidth: 0.4,
                          borderColor: "#978f8f",
                          padding: 20,
                        }}
                      >
                        <FontAwesome5
                          name="brain"
                          size={24}
                          color="#832c1ddd"
                        />
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginLeft: 9,
                            color: "#524e4e",
                            fontSize: 15,
                          }}
                        >
                          Deep Learning and Neural Networks Course Works Results
                          is Out...!
                        </Text>
                      </View>
                      <View style={{
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:20
                      }}>
                        <Text
                        style={{
                          fontWeight: "bold",
                          marginLeft: 9,
                          color: "#524e4e",
                          fontSize: 15,
                        }}
                        >Clear Notifications</Text>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </>
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
