import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer}  from "@react-navigation/native"

import Home from "../Screens/Home"
import Profile from "../Screens/Login"
import Ionicons from "react-native-vector-icons/Ionicons"


const Tab= createBottomTabNavigator()

export default function BottomTabNavigator(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route})=>({
          tabBarIcon:({focused, color, size})=>{
          let iconName;
            if(route.name==="Home"){
              iconName=focused ? "book" : "book-outline"
            }

            else if(route.name==="Profile"){
              iconName=focused ? "add-circle" : "add-circle-outline"
            }

            return  <Ionicons name={iconName} size={size} color={color} />
          }
        })}

        tabBarOptions={{
          activeTintColor:"red",
          inactiveTintColor:"grey"
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}