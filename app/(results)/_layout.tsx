import Filter from "@/components/Filter";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import Coursework from "./coursework";
import Seresults from "./seresults";

const HEADER_HEIGHT = 100;

const Header = () => {
  return (
    <View style={[styles.header]}>
      <Text
        style={{
          flex: 1,
          padding: 10,
          fontWeight: "bold",
        }}
      >
        NTA Levels
      </Text>

      <Filter />
    </View>
  );
};

const Resultlayout = () => {
  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
      allowHeaderOverscroll={true}
      revealHeaderOnScroll={true}
      initialTabName="COURSE WORK"
      renderTabBar={(props) => (
        <MaterialTabBar
          {...props}
          contentContainerStyle={{ flex: 1, overflow: "scroll" }}
          scrollEnabled={true} // Ensures tab labels don’t shrink
          keepActiveTabCentered={true}
          activeColor="#10497E"
          inactiveColor="#bdb9b9"
          labelStyle={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            padding: 10,
            paddingHorizontal: 40,
          }}
          indicatorStyle={{ backgroundColor: "#10497E" }}
          style={{ backgroundColor: "#f5fcf9" }}
        />
      )}
    >
      <Tabs.Tab name="COURSE WORK" label={"COURSE WORK"}>
        <Tabs.ScrollView>
          <Coursework />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="SE Results" label={"SE RESULTS"}>
        <Tabs.ScrollView>
          <Seresults />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default Resultlayout;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#f8fffd",
  },
});
