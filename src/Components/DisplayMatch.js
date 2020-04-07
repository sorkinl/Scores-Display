import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context as ScoresContext } from "../context/ScoresContext";
import { Feather } from "react-native-vector-icons";
import { useNavigation } from 'react-navigation-hooks';

const DisplayMatch = ({onSubmit}) => {
  // Display a component that will show 2 players and score between them, that takes its info
  //from submit function in creatematchform
  const { state, deleteMatch, getMatches } = useContext(ScoresContext);
  const navigation = useNavigation();
  
   useEffect(()=> {
     const matches = getMatches();
     console.log(matches);
  }, []) 
  console.log(state);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={match => match._id}
        renderItem={({ item }) => {
          console.log(item._id)
          return (
            <TouchableOpacity
              onPress={() => onSubmit( {id:item._id} )}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.match.name} - {item.match.name1}
                </Text>
                <TouchableOpacity onPress={() => deleteMatch(item._id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default DisplayMatch;
