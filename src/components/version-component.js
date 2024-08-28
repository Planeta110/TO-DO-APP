import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import IMGFECLADE from "../../assets/Flechaizqse.png";

export default function VersionComponent({ quehacer }) {
  // definimos versionactu y luego totalact
  const [versionactu, setVersionActu] = useState(
    "Error loading the latest version"
  );

  const [totalact, setTotalact] = useState("Error loading all updates");

  // funcion para llamar a la api planeta110.github.io/versions.json 
  async function fetchVersions() {
    // se intenta llamar a la api
    try {
      //definimos la api y la pasamos a json
      const response = await fetch(
        "https://planeta110.github.io/versions.json"
      );
      const data = await response.json();

      // Verifica que lastversion.version sea una cadena
      if (typeof data.lastversion.version === "string") {
        setVersionActu(data.lastversion.version);
      } else {
        console.error("lastversion.version no es una cadena");
      }

      // Verifica que data.versions sea un objeto
      if (typeof data.versions === "object" && !Array.isArray(data.versions)) {
        const versionsArray = Object.values(data.versions);
        setTotalact(versionsArray.length);
      } else {
        console.error("data.versions no es un objeto");
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchVersions();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez cuando el componente se monte

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={quehacer}>
        <Text style={styles.textoversion}>Version</Text>
        <Text style={styles.textversionfinal}>
          {versionactu}  ({totalact})
        </Text>
        <Image style={styles.imagenflecha} source={IMGFECLADE} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  textoversion: {
    color: "#121417",
    fontSize: 20,
    fontWeight: "medium", // Cambiado de "medium" a "500"
  },
  textversionfinal: {
    fontSize: 16,
    fontWeight: "regular", // Cambiado de "regular" a "400"
    color: "#637587",
  },
  imagenflecha: {
    marginLeft: 340,
    marginTop: -38,
    height: 35,
    width: 18,
  },
});
