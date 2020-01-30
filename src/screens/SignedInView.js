import React, { useContext } from 'react';
import  { View, StyleSheet, Text, TextInput } from 'react-native';
import {Context } from '../context/ScoresContext';
import CreateMatchForm from '../Components/CreateMatchForm';


const SignedInView = () => {
    const {createMatch} = useContext(Context);
    return (
        <CreateMatchForm onSubmit={(match) => {
            createMatch(match);
        }}/>
)};



const styles = StyleSheet.create({

});

export default SignedInView;