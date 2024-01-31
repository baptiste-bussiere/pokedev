import { Text, View, TouchableHighlight, FlatList, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "../logic/store";
import { Group } from "../components/Group";
import { Recap } from "../components/Recap";
import { Header } from "../components/Header";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from "tailwindcss/colors";
import { Fragment } from "react";

export function HomeScreen({ navigation }) {
  const groups = useStore((state) => state.groups);
  const addGroup = useStore((state) => state.addGroup);

  return (
    <>
    <View style={{ flex: 1 }}>
       <ScrollView>
      <StatusBar style="auto" />
     
        <View style={{ padding: 15 }}>
        </View>
      </ScrollView>
    </View >
    {/* <MainTabNavigator/> */}

</>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.blue[100],
    borderColor: colors.blue[400],
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 10,
  },
  rowLabel: {
    marginLeft: 3,
    marginTop: 5,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "600",
  },
});
