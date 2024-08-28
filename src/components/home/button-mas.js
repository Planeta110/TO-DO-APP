import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import IMGSUM from "../../../assets/plus.png";

export default function Buttonmas({ navigation }) {
  return (
    <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={() => {
      navigation.navigate("Add Task")
    }}>
      <Image source={IMGSUM} style={style.img} />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    alignItems: "center",

    backgroundColor: "#0A70D9",
    borderRadius: 12,
    height: 70,
    width: 70,
    justifyContent: "center",
    position: "fixed",
    left: "79%",
    bottom: 40,
  },
  img: {
    height: 40,
    width: 40,
  },
});
