import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Plus from "./assets/Plus.png";
import ServiceRenter from './pages/ServiceRenter';
import ServiceManager from './pages/ServiceManager'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'ServiceRenter') {
              return <Image source={Plus}></Image>;
            } else if (route.name === 'ServiceMangager') {
              return <Image source={Plus}></Image>;
            }  
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="ServiceRenter"
          component={ServiceRenter}
        ></Tab.Screen>
        <Tab.Screen
          name="ServiceMangager"
          component={ServiceManager}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  plus: {
    // marginBottom:100,
  },
});

export default App;
