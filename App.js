import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import MainStack from "./navigation/MainStack";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope: require("./assets/fonts/Manrope-Medium.ttf"),
  });
  if (!fontsLoaded) return null;
  
 
  return (
    <View style={styles.container}>
      <MainStack />
      <StatusBar style="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Manrope",
    fontWeight: 600,
    
  },
});
