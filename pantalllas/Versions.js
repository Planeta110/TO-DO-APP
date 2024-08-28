import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Versions({ navigation }) {
  const [resultadofinal, setResultadofinal] = useState([]);

  async function obtenerfetch() {
    try {
      const response = await fetch(
        "https://planeta110.github.io/versions.json"
      );
      const result = await response.json();

      // Convertir el objeto de versiones en un array de nombres de versiones
      const versionsArray = Object.keys(result.versions);
      setResultadofinal(versionsArray);
    } catch (error) {
      console.error("Error fetching versions:", error);
    }
  }

  useEffect(() => {
    obtenerfetch();
  }, []);

  return (
    <View style={styles.centrarview}>
      <Text style={{ fontSize: 25 }}>All versions</Text>
      {resultadofinal.map((version, index) => (
        <Text key={index} style={styles.item}>
          {version}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  centrarview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
