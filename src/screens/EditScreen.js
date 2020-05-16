import React, {useContext} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/ScoresContext';
import CreateMatchForm from '../Components/CreateMatchForm';
const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state,editMatch} = useContext(Context);
    const match = state.find(
        match => match._id === id
    );
    console.log(match);
    return (
        <View>
            <CreateMatchForm 
            initialValues={{
                name: match.match.name,
                name1: match.match.name1,
                games: match.match.games,
                games1: match.match.games1,
                sets: match.match.sets,
                sets1: match.match.sets1,
            }}
            onSubmit={(match) => {
            editMatch(id,match, () => {
                navigation.navigate('SignedIn');
            });
        }}/>
        </View>
    )
}


const styles = StyleSheet.create({});

export default EditScreen;