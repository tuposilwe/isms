import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import useFilter from "@/hooks/useFilter";
import { DataTable, List } from "react-native-paper";

const window = Dimensions.get("window");
const Coursework = () => {
  const { params } = useFilter();

  const data = [
    {
      id: 1,
      course: "Introduction to Social Psychology",
      code: "CYU08106",
      credits: 6,
      assignments: ["T1 - 5.0", "A1 - 6.0", "A2 - 7.0", "A3 - 7.0"],
      marks: 25.0,
    },
    {
      id: 2,
      course: "Vulnerability Analysis",
      code: "CYU08102",
      credits: 10,
      assignments: ["T1 - 13.0", "A1 - 16.0"],
      marks: 29.0,
    },
    {
      id: 3,
      course: "Wireless Networking",
      code: "CYU08105",
      credits: 8,
      assignments: ["A1 - 33.0"],
      marks: 33.0,
    },
    {
      id: 4,
      course: "IT Project Management",
      code: "CYU08101",
      credits: 12,
      assignments: ["T1 - 8.8", "A1 - 14.0"],
      marks: 22.8,
    },
    {
      id: 5,
      course: "Network Management and Administration",
      code: "CYU08103",
      credits: 10,
      assignments: ["A1 - 11.0", "A2 - 15.0", "T1 - 0.0"],
      marks: 26.0,
    },
    {
      id: 6,
      course: "Data Structure and Algorithms",
      code: "CYU08104",
      credits: 12,
      assignments: ["A1 - 14.0", "A2 - 10.0", "T1 - 7.0"],
      marks: 31.0,
    },
  ];

  const data2 = [
    {
      id: 7,
      course: "Kubernetes and Docker Essentials",
      code: "CYU08107",
      credits: 8,
      assignments: ["T1 - 10.0", "A1 - 15.0", "A2 - 12.0"],
      marks: 37.0,
    },
    {
      id: 8,
      course: "Advanced Kubernetes and Cloud Native Applications",
      code: "CYU08108",
      credits: 10,
      assignments: ["T1 - 12.0", "A1 - 18.0", "A2 - 14.0"],
      marks: 44.0,
    },
    {
      id: 9,
      course: "Machine Learning Fundamentals",
      code: "CYU08109",
      credits: 12,
      assignments: ["T1 - 14.0", "A1 - 20.0", "A2 - 18.0"],
      marks: 52.0,
    },
    {
      id: 10,
      course: "Deep Learning and Neural Networks",
      code: "CYU08110",
      credits: 12,
      assignments: ["T1 - 16.0", "A1 - 22.0", "A2 - 20.0"],
      marks: 58.0,
    },
  ];

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

      <View style={{ padding: 16, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
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
