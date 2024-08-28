import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";

// import img
import IMGEDIT from "../../../../assets/edit.png";

export default function Task({ title, duedate, id }) {
  const [isChecked, setChecked] = useState(false);
  const [tareas, setTareas] = useState([]);

  const ObtenerDatos = async () => {
    try {
      const datoss = await AsyncStorage.getItem("tareas");
      setTareas(datoss);
    } catch (err) {}
  };
  // Bucle infinito con espera de 500ms para obtener datos y filtrar
  useEffect(() => {
    const bucleInfinitoConEspera = () => {
      const ejecutarIteracion = async () => {
        await ObtenerDatos(); // Obtén y filtra los datos

        setTimeout(ejecutarIteracion, 500); // Espera 500ms antes de la siguiente iteración
      };

      ejecutarIteracion(); // Inicia el bucle infinito
    };

    bucleInfinitoConEspera();
  }, []);

  const handlePress = () => {
    function eliminarTareaPorIdVeryLow(idEliminar) {
      tareas.tareas.tareasVeryLow = datos.tareasVeryLow.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasVeryLow);
      
    }
    function eliminarTareaPorIdLow(idEliminar) {
      tareas.tareas.tareasLow = datos.tareasLow.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasLow);
    }
    function eliminarTareaPorIdHalf(idEliminar) {
      tareas.tareas.tareasHalf = datos.tareasHalf.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasHalf);
    }
    function eliminarTareaPorIdNormal(idEliminar) {
      tareas.tareas.tareasNormal = datos.tareasNormal.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasNormal);
    }
    function eliminarTareaPorIdHigh(idEliminar) {
      tareas.tareas.tareasHigh = datos.tareasHigh.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasHigh);
    }
    function eliminarTareaPorIdVeryHigh(idEliminar) {
      tareas.tareas.tareasVeryHigh = datos.tareasVeryHigh.filter(
        (tarea) => tarea.id !== idEliminar
      );
      AsyncStorage.setItem("tareas", tareas.tareas.tareasVeryHigh);
    }
    setChecked((prevChecked) => {
      const newChecked = !prevChecked;

      if (newChecked) {
        setTimeout(() => {
          if (newChecked) {
            if (!tareas === null) {
              eliminarTareaPorIdVeryLow(id);
              eliminarTareaPorIdLow(id);
              eliminarTareaPorIdHalf(id);
              eliminarTareaPorIdNormal(id);
              eliminarTareaPorIdHigh(id);
              eliminarTareaPorIdVeryHigh(id);
            }
          }
        }, 2000);
      }

      return newChecked;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#CFDBE8" : "#CFDBE8"}
        />
        <Text
          style={{
            fontSize: 21,
            marginLeft: 50,
            marginTop: -36,
            fontWeight: "medium",
            textDecorationLine: isChecked ? "line-through" : "none",
            textDecorationStyle: "dotted",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 50,
            marginTop: 2,
            color: "#4A709C",
            fontWeight: "regular",
          }}
        >
          {duedate}
        </Text>
        <TouchableOpacity style={{ right: "-88%", top: -46 }}>
          <Image source={IMGEDIT} style={styles.dots} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    height: 30,
    width: 30,
  },
  container: { marginTop: 5 },
  checkbox: {
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    height: 24,
    width: 24,
  },
});
