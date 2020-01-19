import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Plus from 'react-native-vector-icons/AntDesign';


const Player = ({name,games,sets,onIncreaseGames, onDecreaseGames,textInput}) => {
    
  return (
    <View>
      <Text style={styles.label}>Enter Name: </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={textInput}
      />
      <Plus.Button name="plus" onPress={() => onIncrease()} />
      <Text>{games}</Text>
      <Plus.Button name="minus" onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Player;
