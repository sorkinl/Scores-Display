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
     {/* games */}
      <View style= {{flexDirection:'row', marginLeft:30, justifyContent: 'space-between'}}>
       
       {/* Vertical Game */}
          <View>
            <Text>
              Game
            </Text>
            <Plus.Button name="plus" style ={{
            backgroundColor:"red", width:50, height:50
            }} onPress={() => onIncreaseGames()} />
            <Text>{games}</Text>
            <Plus.Button name="minus" onPress={() => onDecreaseGames()} />
          </View>

          <View>
            <Text>
              Set
            </Text>
            <Plus.Button name="plus" style ={{
            backgroundColor:"red", width:50, height:50
            }} onPress={() => onIncreaseSets()} />
            <Text>{sets}</Text>
            <Plus.Button name="minus" onPress={() => onDecreaseSets()} />
          </View>


      </View>


     
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  // gamePlus:{
  //   color
  // }
});

export default Player;
