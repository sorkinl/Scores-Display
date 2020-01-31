import React, {useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {Context} from '../context/ScoresContext';
const DisplayMatch = () => {
// Display a component that will show 2 players and score between them, that takes its info 
//from submit function in creatematchform
const { state } = useContext(Context);
console.log(state);
return(
    <View>
        <FlatList
        data={state}
        keyExtractor={score => score.id}
        renderItem={({ item }) => {
          return (<Text>{item.name} - {item.name1}</Text>);
        }}
      />
    </View>
)
}

const styles = StyleSheet.create({});

export default DisplayMatch;