import { Text, View, TouchableHighlight, FlatList, StyleSheet, ScrollView, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { useStore } from "../logic/store";
import { Group } from "../components/Group";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import colors from "tailwindcss/colors";
import { Fragment, useState } from "react";

export function ItemsScreen() {
  const navigation = useNavigation();
const [selectedIndex, setSelectedIndex] = useState(0);
  const groups = useStore((state) => state.groups);
  const addGroup = useStore((state) => state.addGroup);
  const config = useStore((state) => state.config);

  const plusIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVR4nO3bPU5CURRF4XWBKCVDoKN1CAzB0oQZOAqGZEJj6QgIpaWldlBCMMeCDT4Nf433mJf9JbeChMMKeZCcBxFBxgHGwBwInTkwTpsnKcIjsG1EaJ5JxkxFg1VTShkAH8DNiaesI6JfcSQAOrVfELjndASAXillXGmWg4wQwwuPd9ldP6rKCPEvOYQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOMTer13kK8fXcG08P3at1+wi234mEUEBLu0i224dEf0Ol3eRbdcrpYw7XN5Ftl0Xdt8aC+Azd5ZUW+BwjXgHblPHybOKiEEnIpbAQ/Y0STbsb0Fo/I64A56BJflfaX99lnqvw7R7qIDpFYNOa8/ln9jiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEOIQ4hDiEJIR4o3zu9YN8FJlkoas/4af27WuImJQcSQg4RPR2LVujjz8vYusLOUaERFPwAiYASt2d+zMgFFELDJm+gJ/NSkymRtezQAAAABJRU5ErkJggg=='

  return (
    <>
    <View style={{ flex: 1 }}>
       <ScrollView>
      <StatusBar style="auto" />
  
        <View style={{ flex: 1, padding: 15 }}>
        <View
      style={{
      
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          fontSize: 30,
        }}
      >
Mes Items
  </Text>
 
  <TouchableHighlight
                style={styles.addButton}
                underlayColor={colors.transparent}
                onPress={() => {
                  const groupId = addGroup();
                  navigation.navigate("AddItem", { groupId, name: "Nouvelle item" });
                  
                }}
              >
  <Image
                style={{ width: 20, height: 20, marginRight: 5 }}
                source={{
                  uri: plusIcon,
                }}
              />             
               </TouchableHighlight>
    </View>        

          <View style={{ flex: 1, marginTop: 5 }}>
          {groups.length === 0 ? (
              <View style={{ minHeight: 100, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Aucun Items </Text>
            </View>
              ) : (        
                  <View style={{ flex: 1, marginBottom: 25 }}>  
   <SegmentedControl
    values={['À vendre', 'En vente', 'Vendu']}
    fontStyle={{ color: "black", fontSize: 10 }}
          tintColor={"white"}
          backgroundColor={"#F5F5F5"}
          activeFontStyle={"black"}
          selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          // console.log(selectedIndex);
        }
        }
        />
          </View>  
              )}
     


     {
  groups.map((group, index) => {
    if ((selectedIndex === 0 && group.tag === 'forSale') ||
        (selectedIndex === 1 && group.tag === 'onSale') ||
        (selectedIndex === 2 && group.tag === 'sold')) {
      return (
        <Fragment key={group.id}>
          {index > 0 && <View style={{ height: 10 }} />}
          <Group
            group={group}
            onPress={() => {
              navigation.navigate("Item", { groupId: group.id, name: group.name });
            }}
          />
        </Fragment>
      );
    }
    return null; // Retourne null pour les éléments non conformes à la sélection
  })
}

             

             
           
          </View>
        </View>
      </ScrollView>
  

     
    </View >
  
</>
  );
}

const styles = StyleSheet.create({
  addButton: {
  
    borderRadius: 5,
    flex: 0,
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
