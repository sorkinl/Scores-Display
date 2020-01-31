import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import Player from "./Player";
import DisplayMatch from "./DisplayMatch";

//raph
const CreateMatchForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [games, setGames] = useState(0);
  const [sets, setSets] = useState(0);
  const [name1, setName1] = useState("");
  const [games1, setGames1] = useState(0);
  const [sets1, setSets1] = useState(0);
  

  /*
  Add an image of a player as a prop when styling
  TODO: Leo - I have 2 working components here and we can add their props into onSubmit as destructured object.
  But for know coach will be able to add unlimited amount of matches, because I don't have an ID.
  We have a choice to add ID to each player, that way more than one player with same ID cannot exist. Or we 
  can add id to a separate match component which will make more sense, but I have no idea
  how that will work.
  We could possibly add 2 players to Match component and then make a callback function to OnSubmit to 
  get the props from the players. Then pass an ID with the Match component to flatlist. I think that's the 
  best way.
  */ 
 //d
 //d2
  return (
   
    <View>
      <Player
        games={games}
        name={name}
        sets={sets}
        onIncreaseGames={() => setGames(games<7? games  + 1: 0)}
        //added to prevent negative points
        onDecreaseGames={() => setGames(games>0? games - 1: 7)}
        onIncreaseSets={() => setSets(sets<7? games  + 1: 0)}
        onDecreaseSets={() => setSets(sets>0? sets - 1: 7)}
        textInput={text => setName(text)}
      />
      <Player
        games={games1}
        name={name1}
        sets={sets1}
        onIncreaseGames={() => setGames1(games1 + 1)}
        onDecreaseGames={() => setGames1(games1 - 1)}
        onIncreaseSets={() => setSets1(sets1 + 1)}
        onDecreaseSets={() => setSets1(sets1 - 1)}
        textInput={text => setName1(text)}
      />

      <Button title={"Save Post"} onPress={() => onSubmit({games, name, sets, games1,name1,sets1})} />
      <DisplayMatch />
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
