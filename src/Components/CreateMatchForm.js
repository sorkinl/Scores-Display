import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import Player from './Player';


const CreateMatchForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [games, setGames] = useState(0);
  const [sets, setSets] = useState(0);
  
  return (
    <View>
      <Player 
      games={games}
      name={title}
      onIncreaseGames={() => setGames(games + 1)} 
      onDecreaseGames={() => setGames(games - 1)}
      textInput={(text) => setTitle(text)}
      />

      <Button
        title={"Save Post"}
        onPress={() => onSubmit(title)}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    marginBottom: 15,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default CreateMatchForm;