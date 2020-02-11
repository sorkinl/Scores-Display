import React, { useContext } from 'react';
import  { View, StyleSheet, Text, TextInput } from 'react-native';
import {Context } from '../context/ScoresContext';
import CreateMatchForm from '../Components/CreateMatchForm';
import DisplayMatch from '../Components/DisplayMatch';

const SignedInView = () => {
    const {createMatch} = useContext(Context);
    return (
        <View>
        <CreateMatchForm onSubmit={(match) => {
            createMatch(match);
        }}/>
        <DisplayMatch />
        </View>
)};



const styles = StyleSheet.create({

});

export default SignedInView;