import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { StatsScreen } from "./screens/TeamScreen";
import { ItemsScreen } from "./screens/SearchScreen";
import { AddItem } from "./components/AddItem";
import { Item } from "./components/Item";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabBarIconStyle = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  height: 50,
  margin: 10,
};

function HomeTab() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#007AFF",
        inactiveTintColor: "black",
        labelStyle: { fontSize: 12, fontWeight: "700" },
      }}
    >
      <Tab.Screen
        name="Pokedex"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabBarIconStyle}>
           
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={tabBarIconStyle}>
            
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Ma team"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={tabBarIconStyle}>
           
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ focused }) => (
            <View style={tabBarIconStyle}>
           
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HomeTab}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="AddItem"
        

        component={AddItem}
        options={{title: 'Ajouter un item'}}
      />
        <Stack.Screen
        name="Item"
        component={Item}
        options={{title: "Modifier l'item"}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
