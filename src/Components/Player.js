import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Plus from 'react-native-vector-icons/AntDesign';


const Player = ({name,games,sets,onIncreaseGames, onDecreaseGames,onIncreaseSets,onDecreaseSets,textInput}) => {

  
    
  return (
    <View>
      <Text style={styles.label}>Enter Name: </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={textInput}
      />
      <Plus.Button name="plus" onPress={() => onIncreaseGames()} />
      <Text>{games}</Text>
      <Plus.Button name="minus" onPress={() => onDecreaseGames()} />
      <Plus.Button name="plus" onPress={() => onIncreaseSets()} />
      <Text>{sets}</Text>
      <Plus.Button name="minus" onPress={() => onDecreaseSets()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Player;
