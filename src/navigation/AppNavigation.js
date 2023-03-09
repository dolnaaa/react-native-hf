import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Create from "../containers/Create";
import Read from "../containers/Read";
import Update from "../containers/Update";

const Tab = createBottomTabNavigator();

export class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Read"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const icons = {
                Create: "add-circle",
                Read: "reader",
              };

              return (
                <Ionicons name={icons[route.name]} color={color} size={size} />
              );
            },
          })}
        >
          <Tab.Screen name="Create" component={Create} />
          <Tab.Screen name="Read" component={Read} />
          <Tab.Screen
            name="Update"
            component={Update}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
