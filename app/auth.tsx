import useAuth from "@/hooks/useAuth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Auth = () => {
  const { isAuthenticated,setAuthenticated } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo.png")}
          resizeMode="center"
        />
      </View>
      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          marginTop: 200,
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontWeight: "900",
              marginLeft: "40%",
              fontSize: 15,
              fontStyle: "italic",
            }}
          >
            ISMS
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              gap: 10,
              marginBottom: 15,
              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
              User Name
            </Text>
            <TextInput
              style={{
                borderColor: "#b7b8c0",
                borderWidth: 0.5,
                flex: 1,
                borderRadius: 10,
                padding: 20,
                height: 55,
              }}
              cursorColor="black"
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",

              marginTop: 12,
            }}
          >
            <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Password
            </Text>
            <TextInput
              style={{
                borderColor: "#b7b8c0",
                borderRadius: 10,
                padding: 20,
                height: 55,
                borderWidth: 0.5,
                flex: 1,
              }}
              secureTextEntry={true}
              cursorColor="black"
            />
          </View>
          <TouchableOpacity
            style={{
              position: "relative",
              top: -40,
              left: 250,
              zIndex: 5,
            }}
          >
            <FontAwesome6 name="eye-slash" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#10497E",
              padding: 16,
              margin: 15,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
            onPress={() => {
              setAuthenticated(true)
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <FontAwesome name="lock" size={24} color="black" />
            <Text
              style={{
                color: "#0926ca",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Forgot Password ?
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#10497E",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  image: {
    height: 350,
    width: 200,
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
