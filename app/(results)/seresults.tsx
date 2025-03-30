import { results } from "@/constants/data";
import useFilter from "@/hooks/useFilter";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import { window } from "./coursework";

const Seresults = () => {
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
      <View style={{ padding: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          {params.tab} ANNUAL RESULTS
        </Text>
      </View>

      <DataTable>
        <DataTable.Header
          style={{
            // borderWidth: 1,
            borderWidth: 0.2,
            borderBottomColor: "#10497E",
          }}
        >
          <DataTable.Title>
            <Text style={{ color: "black", fontWeight: "bold" }}>No</Text>
          </DataTable.Title>
          <DataTable.Title style={{ flex: 6 }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>Course</Text>
          </DataTable.Title>

          <DataTable.Title style={{ flex: 1 }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>Grades.</Text>
          </DataTable.Title>
        </DataTable.Header>

        {results.map((item, index) => (
          <DataTable.Row key={item.id} style={{ padding: 20 }}>
            <DataTable.Cell>{index + 1}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 6 }}>
              <View>
                <Text>
                  {item.code} - {item.course}
                </Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 1 }}>{item.grade}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

export default Seresults;
