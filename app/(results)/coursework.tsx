import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import useFilter from "@/hooks/useFilter";
import { DataTable, List } from "react-native-paper";
import { data, data2 } from "@/constants/data";

export const window = Dimensions.get("window");
const Coursework = () => {
  const { params } = useFilter();

  return (
    <ScrollView
      contentContainerStyle={{
        width: window.width,
        padding: 5,
        overflow: "scroll",
        flexDirection: "column",
      }}
    >
      <View style={{ padding: 9, marginTop: 15, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          {params.tab} COURSEWORK RESULTS
        </Text>
      </View>

      <DataTable>
        <DataTable.Header
          style={{
            // borderWidth: 1,
            borderRadius: 4,
            backgroundColor: "#1345a1",
          }}
        >
          <DataTable.Title>
            <Text style={{ color: "white", fontWeight: "bold" }}>No</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 6 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Course</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 4 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Credits</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 4 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Assignments
            </Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 2 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Marks</Text>
          </DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={item.id} style={{ padding: 20 }}>
            <DataTable.Cell>{index + 1}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>
              <View>
                <Text>{item.course}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>{item.credits}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <View>
                {item.assignments.map((assignment, i) => (
                  <Text key={i}>{assignment}</Text>
                ))}
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>{item.marks}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <View style={{ padding: 9, marginTop: 15, alignItems: "center" }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
        >
          {params.tab?.replace("1", "2")} COURSEWORK RESULTS
        </Text>
      </View>

      <DataTable>
        <DataTable.Header
          style={{
            // borderWidth: 1,
            borderRadius: 4,
            backgroundColor: "#1345a1",
          }}
        >
          <DataTable.Title>
            <Text style={{ color: "white", fontWeight: "bold" }}>No</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 6 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Course</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 4 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Credits</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 4 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Assignments
            </Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 2 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Marks</Text>
          </DataTable.Title>
        </DataTable.Header>

        {data2.map((item, index) => (
          <DataTable.Row key={item.id} style={{ padding: 20 }}>
            <DataTable.Cell>{index + 1}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>
              <View>
                <Text>{item.course}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>{item.credits}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 4 }}>
              <View>
                {item.assignments.map((assignment, i) => (
                  <Text key={i}>{assignment}</Text>
                ))}
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 2 }}>{item.marks}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default Coursework;
