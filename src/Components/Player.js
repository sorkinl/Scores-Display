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
      <View style= { styles.row}>
       
       {/* Vertical Game */}
          <View>
            <Text>
              Game
            </Text>
            <Plus.Button name="plus" style ={ styles.plus } onPress={() => onIncreaseGames()} />
            <Text>{games}</Text>
            <Plus.Button name="minus" style ={ styles.minus } onPress={() => onDecreaseGames()} />
          </View>

          <View>
            <Text>
              Set
            </Text>
            <Plus.Button name="plus" style ={ styles.plus } onPress={() => onIncreaseSets()} />
            <Text>{sets}</Text>
            <Plus.Button name="minus"  style ={ styles.minus } onPress={() => onDecreaseSets()} />
          </View>


      </View>


     
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  plus:{
    backgroundColor:"red", width:50, height:50
    },
  minus:{
      backgroundColor:"blue", width:50, height:50
      },
  row:{
    flexDirection:'row', margin:30, justifyContent: 'space-between'
  }
});

export default Player;
