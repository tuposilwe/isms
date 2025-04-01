import Loading from "@/components/Loading";
import PaymentFilter from "@/components/PaymentFilter";
import useLoading from "@/hooks/useLoading";
import generatePdf from "@/lib/generatePdf";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { DataTable } from "react-native-paper";

const payments = () => {
  const transactions = [
    {
      date: "",
      type: "Tuition Fee",
      receipt: "",
      debit: "1,853,000.00",
      credit: "",
      balance: "-1,853,000.00",
    },
    {
      date: "2021-11-01 13:21:19",
      type: "Tuition Fee",
      receipt: "994100112411",
      debit: "",
      credit: "300,000.00",
      balance: "-1,553,000.00",
    },
    {
      date: "2021-11-01 16:31:33",
      type: "Tuition Fee",
      receipt: "994100113060",
      debit: "",
      credit: "433,200.00",
      balance: "-1,119,800.00",
    },
    {
      date: "2022-02-04 11:16:51",
      type: "Tuition Fee",
      receipt: "994100129452",
      debit: "",
      credit: "20,000.00",
      balance: "-1,099,800.00",
    },
    {
      date: "2022-03-30 16:06:32",
      type: "Tuition Fee",
      receipt: "994100145600",
      debit: "",
      credit: "366,600.00",
      balance: "-733,200.00",
    },
    {
      date: "2022-04-04 10:47:37",
      type: "Tuition Fee",
      receipt: "994100146578",
      debit: "",
      credit: "383,200.00",
      balance: "0.00",
    },
  ];

  const { appIsReady } = useLoading();

  if (!appIsReady) {
    return <Loading visible={true} message="Loading..." />;
  }
  return (
    <ScrollView
      contentContainerStyle={{
        width: "200%",
        padding: 25,
        overflow: "scroll",
        flexDirection: "column",
      }}
      horizontal
    >
      <ScrollView>
        <PaymentFilter />

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            REECE NELSON MANDELA
          </Text>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            Financial Year 2025/2026
          </Text>
          <DataTable>
            <DataTable.Header
              style={{
                borderWidth: 0.1,
                borderBottomColor: "#10497E",
              }}
            >
              <DataTable.Title style={{ flex: 10 }}>TransDate</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>
                Transaction Type
              </DataTable.Title>
              <DataTable.Title style={{ flex: 11 }}>
                Control No./Receipt No.
              </DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Debit</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>Credit</DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Balance</DataTable.Title>
            </DataTable.Header>

            {transactions.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{ flex: 10 }}>
                  {item.date}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>{item.type}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 11 }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                    onPress={() => generatePdf()}
                  >
                    <Text style={{ marginRight: 3 }}>{item.receipt}</Text>

                    {item.receipt !== "" && (
                      <FontAwesome name="print" size={14} color="blue" />
                    )}
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.debit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>
                  {item.credit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.balance}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Row>
              <DataTable.Cell>
                <View></View>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <View
                  style={{
                    backgroundColor: "#10497E",
                    borderRadius: 8,
                    padding: 10,
                    marginLeft: "35%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Tutution Fee Control Number
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Other Payments
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell
                style={{
                  marginLeft: "70%",
                  borderRightWidth: 0.2,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  1,853,000.00
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  0.00
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            REECE NELSON MANDELA
          </Text>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            Financial Year 2022/2023
          </Text>
          <DataTable>
            <DataTable.Header
              style={{
                borderWidth: 0.1,
                borderBottomColor: "#10497E",
              }}
            >
              <DataTable.Title style={{ flex: 10 }}>TransDate</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>
                Transaction Type
              </DataTable.Title>
              <DataTable.Title style={{ flex: 11 }}>
                Control No./Receipt No.
              </DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Debit</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>Credit</DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Balance</DataTable.Title>
            </DataTable.Header>

            {transactions.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{ flex: 10 }}>
                  {item.date}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>{item.type}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 11 }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                    onPress={() => generatePdf()}
                  >
                    <Text style={{ marginRight: 3 }}>{item.receipt}</Text>

                    {item.receipt !== "" && (
                      <FontAwesome name="print" size={14} color="blue" />
                    )}
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.debit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>
                  {item.credit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.balance}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Row>
              <DataTable.Cell>
                <View></View>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <View
                  style={{
                    backgroundColor: "#10497E",
                    borderRadius: 8,
                    padding: 10,
                    marginLeft: "35%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Tutution Fee Control Number
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Other Payments
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell
                style={{
                  marginLeft: "70%",
                  borderRightWidth: 0.2,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  1,853,000.00
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  0.00
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            REECE NELSON MANDELA
          </Text>
          <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
            Financial Year 2021/2022
          </Text>
          <DataTable>
            <DataTable.Header
              style={{
                borderWidth: 0.1,
                borderBottomColor: "#10497E",
              }}
            >
              <DataTable.Title style={{ flex: 10 }}>TransDate</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>
                Transaction Type
              </DataTable.Title>
              <DataTable.Title style={{ flex: 11 }}>
                Control No./Receipt No.
              </DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Debit</DataTable.Title>
              <DataTable.Title style={{ flex: 7 }}>Credit</DataTable.Title>
              <DataTable.Title style={{ flex: 6 }}>Balance</DataTable.Title>
            </DataTable.Header>

            {transactions.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={{ flex: 10 }}>
                  {item.date}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>{item.type}</DataTable.Cell>
                <DataTable.Cell style={{ flex: 11 }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                    onPress={() => generatePdf()}
                  >
                    <Text style={{ marginRight: 3 }}>{item.receipt}</Text>

                    {item.receipt !== "" && (
                      <FontAwesome name="print" size={14} color="blue" />
                    )}
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.debit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 7 }}>
                  {item.credit}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 6 }}>
                  {item.balance}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Row>
              <DataTable.Cell>
                <View></View>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <View
                  style={{
                    backgroundColor: "#10497E",
                    borderRadius: 8,
                    padding: 10,
                    marginLeft: "35%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Tutution Fee Control Number
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Other Payments
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Total
                  </Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell
                style={{
                  marginLeft: "70%",
                  borderRightWidth: 0.2,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  1,853,000.00
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  0.00
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default payments;
