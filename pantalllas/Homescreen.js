import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Bartop from "../src/components/home/bartpo";
import Bartop1 from "../src/components/home/bartpo1";
import Bartop2 from "../src/components/home/bartpo2";
import Buttonmas from "../src/components/home/button-mas";
import Task from "../src/components/home/task/task";

export default function HomeScreen({ navigation }) {
  const [sitio, setSitio] = useState(0);
  const [tareasf, setTareas] = useState(null);
  const [TareasTodayVeryHigh, setTareasTodayVeryHigh] = useState([]);
  const [TareasTodayHigh, setTareasTodayHigh] = useState([]);
  const [TareasTodayNormal, setTareasTodayNormal] = useState([]);
  const [TareasTodayHalf , setTareasTodayHalf] = useState([]);
  const [TareasTodayLow, setTareasTodayLow ] = useState([]);
  const [TareasTodayVeryLow, setTareasTodayVeryLow ] = useState([]);


  const chagesitio = (adonde) => {
    setSitio(adonde);
  };

  

  // Función para obtener los datos de AsyncStorage
  const ObtenerDatos = async () => {
    try {
      const obtener = await AsyncStorage.getItem("tareas");
      if (obtener !== null) {
        const tareast = JSON.parse(obtener);
        setTareas(tareast);
        FiltrarDatosVeryHigh(tareast);
        FiltrarDatosHigh(tareast);
        FiltrarDatosNormal(tareast);
        FiltrarDatosHalf(tareast);
        FiltrarDatosLow(tareast);
        FiltrarDatosVeryLow(tareast);
      } else {
        const initialData = {
          tareas: {
            tareasVeryLow: [],
            tareasLow: [],
            tareasHalf: [],
            tareasNormal: [],
            tareasHigh: [],
            tareasVeryHigh: [],
          },
        };
        await AsyncStorage.setItem("tareas", JSON.stringify(initialData));
        setTareas(initialData);
        FiltrarDatosVeryHigh(initialData);
        FiltrarDatosHigh(initialData);
        FiltrarDatosNormal(initialData);
        FiltrarDatosHalf(initialData);
        FiltrarDatosLow(initialData);
        FiltrarDatosVeryLow(initialData);
      }
    } catch (error) {
      console.log("No hay datos para obtener:", error);
    }
  };

  // Función para filtrar las tareas de VeryHigh que son para hoy
  const FiltrarDatosVeryHigh = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasVeryHigh.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayVeryHigh(TareasToday);
    }
  };

  // Función para filtrar las tareas de High que son para hoy
  const FiltrarDatosHigh = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasHigh.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayHigh(TareasToday);
    }
  };

  // Función para filtrar las tareas de Normal que son para hoy
  const FiltrarDatosNormal = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasNormal.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayNormal(TareasToday);
    }
  };

  const FiltrarDatosHalf = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasHalf.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayHalf(TareasToday);
    }
  }; 

  const FiltrarDatosLow = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasLow.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayLow(TareasToday);
    }
  }; 

  const FiltrarDatosVeryLow = (data) => {
    if (data && data.tareas) {
      const TareasToday = data.tareas.tareasVeryLow.filter(
        (tarea) => tarea.fecha === "Today"
      );
      setTareasTodayVeryLow(TareasToday);
    }
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
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  if (sitio === 0 && tareasf && tareasf.tareas) {
    return (
      <View style={styles.container}>
        <Bartop chagesitio={chagesitio} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.views}>
            <View style={styles.viewstaask}>
              {TareasTodayVeryHigh.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {TareasTodayHigh.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {TareasTodayNormal.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {TareasTodayHalf.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {TareasTodayLow.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {TareasTodayVeryLow.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))} 
              
            </View>
          </View>
        </ScrollView>
        <Buttonmas navigation={navigation} />
      </View>
    );
  } else if (sitio === 1) {
    return (
      <View style={styles.container}>
        <Bartop1 chagesitio={chagesitio} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.views}>
            <View style={styles.viewstaask}>
              {tareasf.tareas.tareasVeryHigh.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {tareasf.tareas.tareasHigh.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {tareasf.tareas.tareasNormal.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {tareasf.tareas.tareasHalf.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {tareasf.tareas.tareasLow.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
              {tareasf.tareas.tareasVeryLow.map((tarea, index) => (
                <Task key={index} title={tarea.titulo} duedate={tarea.fecha} id={tarea.id} />
              ))}
            </View>
          </View>
        </ScrollView>

        <Buttonmas navigation={navigation} />
      </View>
    );
  } else if (sitio === 2) {
    return (
      <View style={styles.container}>
        <Bartop2 chagesitio={chagesitio} />
        <ScrollView>
          <View style={styles.views}>
            <Text>HOLA 3</Text>
          </View>
        </ScrollView>

        <Buttonmas navigation={navigation} />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  viewstaask: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  textboton: {
    fontSize: 28,
  },
  views: {
    marginTop: 20,
    marginLeft: 20,
  },
});
