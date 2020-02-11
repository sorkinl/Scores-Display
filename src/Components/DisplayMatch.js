import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/ScoresContext';
import {Feather} from 'react-native-vector-icons';
const DisplayMatch = () => {
// Display a component that will show 2 players and score between them, that takes its info 
//from submit function in creatematchform
const { state } = useContext(Context);
const { deleteMatch } = useContext(Context);
console.log(state);
return(
    <View>
        <FlatList
        data={state}
        keyExtractor={match => match.id}
        renderItem={({ item }) => {
          return (
          <View style={styles.row}>
            <Text style={styles.title}>{item.name} - {item.name1}</Text>
            <TouchableOpacity onPress={() => deleteMatch(item.id)}>
            <Feather style={styles.icon} name="trash"/>
            </TouchableOpacity>
          </View>
            );
        }}
      />
    </View>
)
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title:{
  fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default DisplayMatch;