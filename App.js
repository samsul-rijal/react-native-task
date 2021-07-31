import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import Calculator from "./src/screens/Calculator";
import Todo from "./src/screens/Todo";
import Movies from "./src/screens/Movies";
import DetailMovies from "./src/screens/DetailMovies";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          } else if (route.name === "Todo") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Movies") {
            iconName = focused ? "film" : "film-outline";
          } else {
            iconName = focused ? "ios-document-text" : "ios-document-text-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#cc0000",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="Movies" component={Movies} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Detail Movies" component= {DetailMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
