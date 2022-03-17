import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props) => {
  return <View style={{...styles.screen, ...props.style}}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: 20,
    alignItems: "center",
    width: "90%",
    marginHorizontal: "5%",
    elevation: 10,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
