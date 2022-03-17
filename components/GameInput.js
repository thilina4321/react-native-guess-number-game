import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Card from "./Card";

const GameInput = (props) => {
  const { guessNumber, setGuessNumber, setGuessArr, guessHandlerNumber } =
    props;
  return (
    <Card>
      <Text> Start the Game </Text>
      <TextInput
        keyboardType="number-pad"
        maxLength={1}
        style={styles.inputContainer}
        value={guessNumber}
        onChangeText={(e) => setGuessNumber(e)}
      />
      <View style={styles.btnContainer}>
        <View style={styles.btnComponent}>
          <Button title="Reset" onPress={() => setGuessArr([])} />
        </View>
        <View style={styles.btnComponent}>
          <Button title="Guess" onPress={guessHandlerNumber} />
        </View>
      </View>
    </Card>
  );
};

export default GameInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    borderColor: "#eee",
    borderWidth: 2,
    width: "100%",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

  btnContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  btnComponent: {
    padding: 3,
    width: "40%",
  },
});
