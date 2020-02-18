import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import {Context} from '../context/ScoresContext';
const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context);
    const match = state.find((match)=> match.id === navigation.getParam('id'));
    return (
        <View>
            <Text>{match.id}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ShowScreen;