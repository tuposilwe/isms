import { View, Text } from "react-native";
import React from "react";
import useFilter from "@/hooks/useFilter";

const Coursework = () => {
  const { params } = useFilter();

  return (
    <View>
      <Text style={{ fontWeight: "900", padding: 20 }}>
        {params.tab} COURSEWORK RESULTS
      </Text>



    </View>
  );
};

export default Coursework;
