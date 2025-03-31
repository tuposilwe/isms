import images from "@/constants/image";
import React from "react";
import { Image, Text, View } from "react-native";

const about = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 27,
      }}
    >
      <Image
        source={images.isms}
        style={{
          width: 150,
          height: 150,
          tintColor: "#ffffff",
          borderWidth: 2,
          borderColor: "#ffffff",
          backgroundColor: "#10497E",
          borderRadius: 20,
          padding: 30,
          resizeMode: "cover",
          overflow: "hidden",
        }}
      />

      <View style={{
        justifyContent:"center",
        alignItems:"center",
        gap:7,
        marginTop:7
      }}>
        <Text style={{fontWeight:"bold"}}>ISMS</Text>
        <Text style={{fontWeight:"bold"}}>Version 0.0.1</Text>
      </View>
    </View>
  );
};

export default about;
