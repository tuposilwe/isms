import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { controlNumber } from "@/constants/data";
import useControlNumber from "@/hooks/useControlNumber";

import useSettings from "@/hooks/useSettings";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DataTable } from "react-native-paper";

const PaymentFilter = () => {
  const { selectedTab, setSelectedTab } = useControlNumber();
  const { isModalVisible, toggleModal } = useSettings();

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        padding: 5, // Extra right padding
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 3,
        marginBottom: 12,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {controlNumber.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
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
              borderColor: item.borderColor,
              backgroundColor: item.backgroundColor,
              borderWidth: 0.2,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setSelectedTab(item.title);
            }}
          >
            <Text
              style={[
                {
                  fontWeight: "light",
                },
                selectedTab === item.title
                  ? { color: "white", marginTop: 0.5, fontWeight: "bold" }
                  : { color: "white", marginTop: 0.5, fontWeight: "bold" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        visible={isModalVisible}
        transparent={true}
        onDismiss={() => toggleModal()}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: "100%",
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

              <DataTable>
                <Text style={{ fontWeight: "900", marginLeft: 9 }}>
                  {selectedTab}
                </Text>

                <DataTable.Header>
                  <DataTable.Title>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: "black",
                      }}
                    >
                      DTA/0014/2018
                    </Text>
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        gap: 10,
                        marginBottom: 15,
                        marginTop: 12,
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>Amount</Text>
                      <TextInput
                        style={{
                          borderColor: "#b7b8c0",
                          borderWidth: 0.5,
                          flex: 1,
                        }}
                        cursorColor="black"
                        inputMode="numeric"
                        maxLength={12}
                      />
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        gap: 10,
                        marginBottom: 15,
                        marginTop: 12,
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>
                        Enter Phone Number without staring 0, example:
                        7659991409
                      </Text>
                      <TextInput
                        style={{
                          borderColor: "#b7b8c0",
                          borderWidth: 0.5,
                          flex: 1,
                        }}
                        cursorColor="black"
                        inputMode="numeric"
                        maxLength={12}
                      />
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#10497E",
                        borderRadius: 12,
                        padding: 10,
                        margin: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "70%",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Proceed
                      </Text>
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PaymentFilter;
