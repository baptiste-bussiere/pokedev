import { Text, View, TouchableHighlight, FlatList, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "../logic/store";
import { Group } from "../components/Group";
import { Recap } from "../components/Recap";
import { Header } from "../components/Header";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import colors from "tailwindcss/colors";
import { Fragment } from "react";

export function StatsScreen({ navigation }) {
  const groups = useStore((state) => state.groups);
  const addGroup = useStore((state) => state.addGroup);




  return (
    <>
    <View style={{ flex: 1 ,padding: 15,}}>
       <ScrollView>
      <StatusBar style="auto" />
     
      
        <View style={{ flex: 1 }}>
          <Header name="Statistiques" />
        </View>
        {groups.length === 0 ? (
                <View style={{ minHeight: 100, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Aucune données !</Text>
              </View>
              ) : (        
                  <View style={{ flex: 1, marginBottom: 25 }}>  
   <SegmentedControl
    values={['1j', '1s', '1m', '1a']}
    fontStyle={{ color: "black", fontSize: 10 }}
          tintColor={"white"}
          backgroundColor={"#F5F5F5"}
          activeFontStyle={"black"}
          // selectedIndex={selectedIndex}
          // onChange={(event) => {
          //   setAssessment(event.nativeEvent.selectedSegmentIndex);
          // }}
        />
          </View>  
              )}
      </ScrollView>

     
    </View >


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
