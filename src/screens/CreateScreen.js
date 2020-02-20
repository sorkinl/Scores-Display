import React, {useContext} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/ScoresContext';
import CreateMatchForm from '../Components/CreateMatchForm';
const CreateScreen = ({navigation}) => {
    const {state,createMatch} = useContext(Context);
    
    
    return (
        <View>
            <CreateMatchForm 
            onSubmit={(match) => {
            createMatch(match, () => {
                navigation.navigate('SignedIn');
            });
        }}/>
        </View>
    )
}


const styles = StyleSheet.create({});

export default CreateScreen;