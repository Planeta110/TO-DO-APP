import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Alert, TouchableOpacity } from "react-native";
import VersionComponent from "../src/components/version-component.js";

export default function InfoScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const mirarsiestrue = () => {
    if (isEnabled === false) {
      Alert.alert("Dark Mode is developing");
      
      setIsEnabled(true);
    }
  };

  return (
    <View>
      <View style={styles.containerconfig}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Staging</Text>
        </View>
        <View style={styles.containerdarmode}>
          <TouchableOpacity onPress={() => {
            Alert.alert("Dark Mode is developing");
          }}>
            <Text style={{ fontSize: 20, fontWeight: "regular" }}>
              Dark Mode
            </Text>
            <Switch
              style={styles.switch}
              onValueChange={toggleSwitch}
              value={isEnabled}
              onChange={mirarsiestrue}
            />
          </TouchableOpacity>
        </View>
        <View>
          <VersionComponent
            quehacer={() => {
              navigation.navigate("Versions");
            }}
          />
        </View>
        <Text style={styles.textnostable}>No Stable</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    position: "absolute",
    marginTop: -10,
    right: 30,
  },
  containerconfig: {
    top: 30,
    left: 10,
  },
  containerdarmode: {
    marginTop: 20,
  },
  textnostable: {
    marginTop: 30,
    fontWeight: "regular",
    fontSize: 20,
  },
});
