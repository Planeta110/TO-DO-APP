import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import SelectDropdown
import { SelectList } from "react-native-dropdown-select-list";

//import img
import IMGCALENDAR from "../assets/Calendar.png";

export default function CreateTask({ navigation }) {
  const [selected, setSelected] = React.useState("Today");
  const [selected2, setSelected2] = React.useState("Very Low");
  const [value, onChangeText] = React.useState("");
  const [valuenote, onChangeTextNOTE] = React.useState("");

  //      <TextInput
  //          editable
  //          maxLength={40}
  //          onChangeText={(text) => onChangeTextDUE(text)}
  //          value={valuedue}
  //          style={styles.inputtexttitle}
  //          placeholder="Today (18:30)"
  //        />
  const funcionborrar = async () => {
    await AsyncStorage.removeItem("tareas");
    console.log("Se borraron todos los datos");
  };

  


  const crearlatarea = async () => {
    function createRandomID(max) {
      return Math.floor(Math.random() * max);
    }

    if ((value === "" && valuenote === "") || value === "") {
      Alert.alert("Alert Error", "Task and/or Notes are required.");
      return null;
    }

    try {
      const datos = await AsyncStorage.getItem("tareas");

      if (datos !== null) {
        const tareas = JSON.parse(datos);

        // Asegurarse de que la propiedad 'tareas' exista
        if (selected2 === "Very Low") {
          if (!tareas.tareas || !tareas.tareas.tareasVeryLow) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasVeryLow: [],
            };
          }

          tareas.tareas.tareasVeryLow.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasVeryLow);
        } else if (selected2 === "Low") {
          if (!tareas.tareas || !tareas.tareas.tareasLow) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasLow: [],
            };
          }

          tareas.tareas.tareasLow.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasLow);
        } else if (selected2 === "Half") {
          if (!tareas.tareas || !tareas.tareas.tareasHalf) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasHalf: [],
            };
          }

          tareas.tareas.tareasHalf.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasHalf);
        } else if (selected2 === "Normal") {
          if (!tareas.tareas || !tareas.tareas.tareasNormal) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasNormal: [],
            };
          }

          tareas.tareas.tareasNormal.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasNormal);
        } else if (selected2 === "High") {
          if (!tareas.tareas || !tareas.tareas.tareasHigh) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasHigh: [],
            };
          }

          tareas.tareas.tareasHigh.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasHigh);
        } else if (selected2 === "Very High") {
          if (!tareas.tareas || !tareas.tareas.tareasVeryHigh) {
            tareas.tareas = {
              ...tareas.tareas,
              tareasVeryHigh: [],
            };
          }

          tareas.tareas.tareasVeryHigh.push({
            titulo: value,
            descripcion: valuenote,
            fecha: selected,
            priority: selected2,
            completed: false,
            id: createRandomID(10000),
          });
          await AsyncStorage.setItem("tareas", JSON.stringify(tareas));
          console.log(tareas.tareas.tareasVeryHigh);
        }
      } else {
      }
    } catch (error) {
      console.error("Error en crearlatarea:", error);
    }

    navigation.navigate("To Do");
  };

  const dataday = [
    { key: "1", value: "Today" },
    { key: "2", value: "Monday" },
    { key: "3", value: "Tuesday" },
    { key: "4", value: "Wednesday" },
    { key: "5", value: "Thursday" },
    { key: "6", value: "Friday" },
    { key: "7", value: "Saturday" },
    { key: "8", value: "Sunday" },
  ];

  const priority = [
    { key: "1", value: "Very Low" },
    { key: "2", value: "Low" },
    { key: "3", value: "Half" },
    { key: "4", value: "Normal" },
    { key: "5", value: "High" },
    { key: "6", value: "Very High" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task</Text>
        <TextInput
          editable
          maxLength={35}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.inputtexttitle}
          placeholder="Title"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          editable
          multiline
          maxLength={256}
          numberOfLines={4}
          onChangeText={(text) => onChangeTextNOTE(text)}
          value={valuenote}
          style={styles.inputtextnotes}
          placeholder="Notes"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Due Date</Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={dataday}
          save="value"
          placeholder={"Today"}
          search={false}
          boxStyles={styles.duedate}
          inputStyles={{ fontSize: 18, verticalAlign: "middle" }}
          dropdownItemStyles={{ backgroundColor: "#F0F2F5", zIndex: 10 }}
          dropdownStyles={styles.dropdowns}
          defaultOption={1}
        />

        <Image source={IMGCALENDAR} style={styles.imgcalendar} />
      </View>
      <View style={styles.inputContainerp}>
        <Text style={styles.label}>Priority</Text>
        <SelectList
          setSelected={(val) => setSelected2(val)}
          data={priority}
          save="value"
          placeholder={"Very Low"}
          search={false}
          defaultOption={1}
          boxStyles={{
            height: 60,
            borderRadius: 12,
            width: width * 0.9,
            backgroundColor: "#F0F2F5",
            borderWidth: 0,
          }}
          inputStyles={{ fontSize: 18, verticalAlign: "middle" }}
          dropdownItemStyles={{ backgroundColor: "#F0F2F5", zIndex: 10 }}
          dropdownStyles={styles.dropdowns}
          maxHeight={120}
        />
      </View>
      <TouchableOpacity style={styles.addtaskbutton} onPress={crearlatarea}>
        <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  dropdowns: {
    marginTop: -6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#F0F2F5",
    zIndex: 10,
    borderWidth: 0,
    width: width * 0.9,
  },
  imgcalendar: {
    position: "absolute",
    right: 40,
    height: 30,
    width: 30,
    marginTop: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#121417",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
  },
  inputtexttitle: {
    backgroundColor: "#F0F2F5",
    fontSize: 18,
    height: 60,
    width: width * 0.9, // El ancho se ajusta al 90% de la pantalla
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 10,
  },
  inputtextnotes: {
    backgroundColor: "#F0F2F5",
    fontSize: 18,
    height: 160,
    width: width * 0.9, // El ancho se ajusta al 90% de la pantalla
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 10,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  duedate: {
    height: 60,
    borderRadius: 12,
    width: width * 0.9,
    backgroundColor: "#F0F2F5",
    borderWidth: 0, // Eliminar el borde
  },
  addtaskbutton: {
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D7DF2",
    height: 48,
    width: width * 0.9,
    borderRadius: 12,
    bottom: 20,
  },
  inputContainerp: {
    width: "100%",
    marginTop: 420,
    left: 20,
    position: "absolute",
  },
});
