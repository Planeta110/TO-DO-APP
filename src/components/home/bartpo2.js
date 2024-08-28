import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Bartop2(props) {
  const cambiaralltask = () => {
    props.chagesitio(1);
  };
  const cambiaratoday = () => {
    props.chagesitio(0);
  };

  const cambiarcompleteed = () => {
    props.chagesitio(2);
  };

  return (
    <View style={style.viewstyle}>
      <TouchableOpacity onPress={cambiaratoday}>
        <Text style={style.textotoday}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cambiaralltask}>
        <Text style={style.textalltask}>All Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cambiarcompleteed}>
        <Text style={style.textcompleted}>Completed</Text>
      </TouchableOpacity>
      <View style={style.viewbarra}></View>
      <View style={style.viewhr}></View>
    </View>
  );
}

  const style = StyleSheet.create({
    viewbarra: {
      position: "absolute",
      height: 4,
      marginLeft: 235,
      width: 50,
      marginTop: 35,
      backgroundColor: "#989898",
      borderRadius: 6,
    },
    viewhr: {
      backgroundColor: "#878787",
      height: 1,
      width: "100%",
      marginTop: 14,
    },
    textcompleted: {
      color: "#0D141C",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 220,
      marginTop: -24,
    },
    viewstyle: {
      marginTop: 15,
    },
    textotoday: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4A709C",
      marginLeft: 20,
    },
    textalltask: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4A709C",
      marginLeft: 105,
      marginTop: -24,
    },
  });

