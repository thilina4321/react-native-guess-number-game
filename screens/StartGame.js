import { StyleSheet, View, Keyboard } from "react-native";
import React, { useState } from "react";
import HisttoryList from "../components/HisttoryList";
import GameInput from "../components/GameInput";

const StartGame = () => {
  const [guessNumber, setGuessNumber] = useState("");
  const [guessArr, setGuessArr] = useState([]);

  const guessHandlerNumber = () => { 
    let rndNumber = Math.abs(Math.random() * 10);
    rndNumber = rndNumber.toFixed(0).toString();
    const isCorrect = rndNumber == guessNumber ? true : false;
    setGuessArr((g) => [...g, { guessNumber, rndNumber, isCorrect }]);
    setGuessNumber("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.all}> 
      <GameInput
        guessNumber={guessNumber}
        setGuessNumber={setGuessNumber}
        setGuessArr={setGuessArr}
        guessHandlerNumber={guessHandlerNumber}
      />
      <HisttoryList guessArr={guessArr} />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  all:{
    width:'100%'
  }
});
