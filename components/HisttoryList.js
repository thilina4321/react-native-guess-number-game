import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const HisttoryList = (props) => {
  const { guessArr = [] } = props;

  return (
    <View style={styles.flatlist}>
      <FlatList
        style={styles.list}
        keyExtractor={(_, ind) => ind}
        data={guessArr}
        renderItem={(itemData, _) => (
          <Card style={styles.item}>
            <Text style={styles.text}>Guess : {itemData.item.guessNumber}</Text>
            <Text style={styles.text}>Correct : {itemData.item.rndNumber}</Text>
            <View style={styles.text}>
              {itemData.item.isCorrect ? (
                <Text style={styles.correctText}> Your guess is right </Text>
              ) : (
                <Text style={styles.wrongText}> Sorry try again </Text>
              )}
            </View>
          </Card>
        )}
      ></FlatList>
    </View>
  );
};

export default HisttoryList;

const styles = StyleSheet.create({
  flatlist: {
    height: 500,
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 0,
    paddingBottom: 60
  },
  list: { width: "90%", margin: "1%" },
  item: {
    borderWidth: 2,
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  wrongText: {
    color: "red",
  },
  correctText: {
    color: "green",
  },
});
