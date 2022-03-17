import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";

const StartGame = () => {
  const [guessNumber, setGuessNumber] = useState("");
  const [guessArr, setGuessArr] = useState([]);

  const gessNumber = () => {
    const rndNumber = Math.abs(Math.random() * 10)
      .toFixed(0)
      .toString();
    setGuessArr((guess) => [
      ...guess,
      {
        guess: guessNumber,
        rand: rndNumber,
        isCorrect: rndNumber == guessNumber ? true : false,
      },
    ]);
    setGuessNumber("");
    Keyboard.dismiss()
  };

  return (
    <View>
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
            <Button title="Guess" onPress={gessNumber} />
          </View>
        </View>
      </Card>

      <View style={styles.flatlist}>
        <FlatList
          keyExtractor={(item, ind) => ind}
          data={guessArr}
          renderItem={(itemData, index) => (
            <Card>
              <Text> Guess : {itemData.item.guess} </Text>
              <Text> Correct : {itemData.item.rand} </Text>
              <Text>
                {itemData.item.isCorrect
                  ? "Your guess is right"
                  : "Sorry try again"}
              </Text>
            </Card>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default StartGame;

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
  flatlist: {
    height: 500,
  },
});
