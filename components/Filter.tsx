import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { tabs } from "@/constants/data";
import useFilter from "@/hooks/useFilter";

const Filters = () => {
  const { selectedTab, setSelectedTab } = useFilter();

  const handleTabPress = (currentTab: string) => {
    if (selectedTab === currentTab) {
      setSelectedTab("");
      router.setParams({ tab: "" });
      return;
    }

    setSelectedTab(currentTab);
    router.setParams({ tab: currentTab });
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        padding: 5, // Extra right padding
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 3,
        marginBottom: 2,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {tabs.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            handleTabPress(item.title);
            if (selectedTab === item.title) {
              setSelectedTab("");
              return;
            }
            setSelectedTab(item.title);
          }}
          key={index}
          style={[
            {
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginRight: 7,
              minWidth: 100,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 11,
              borderColor: "#181813",
              borderWidth: 0.2,
            },
            selectedTab === item.title
              ? { backgroundColor: "#124c7c", borderColor: "#201c1c" }
              : { backgroundColor: "#fff", borderColor: "#040536" },
          ]}
        >
          <Text
            style={[
              {
                fontWeight: "light",
              },
              selectedTab === item.title
                ? { color: "white", marginTop: 0.5, fontWeight: "bold" }
                : { color: "black" },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
