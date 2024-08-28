// basics
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from "react-native";
import React from "react";

// import all screens
import HomeScreen from "../pantalllas/Homescreen.js";
import InfoScreen from "../pantalllas/InfoScreen.js";
import CreateTask from "../pantalllas/CreateTask.js";
import Versions from "../pantalllas/Versions.js";

// import all images
import IMAGDDTASK from "../assets/Addnewtask.png";
import IMAGSETTINGS from "../assets/Settingboton.png";


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer
      theme={{
        colors: { background: "#FFFFFF" },
      }}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontFamily: "Manrope",
            fontWeight: "bold",
            color: "#121417",
          },
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Settings");
              }}
            >
              <Image source={IMAGSETTINGS} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Add Task");
              }}
            >
              <Image source={IMAGDDTASK} />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen name="To Do" component={HomeScreen} />
        <Stack.Screen
          name="Add Task"
          component={CreateTask}
          options={{ headerLeft: () => null, headerRight: () => null }}
        />
        <Stack.Screen
          name="Settings"
          options={{ headerLeft: () => null, headerRight: () => null }}
          component={InfoScreen}
        />
        <Stack.Screen
          name="Versions"
          component={Versions}
          options={{ headerLeft: () => null, headerRight: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
