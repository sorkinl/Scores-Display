import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import {Context} from '../context/ScoresContext';
const ShowScreen = ({navigation}) => {
    const { state } = useContext(Context);
    const match = state.find((match)=> match.id === navigation.getParam('id'));
    return (
        <>
        <View style={styles.scoreContainer}>
            <Text>{match.match.name} - {match.match.games}</Text>
            
        </View>
        <View style={styles.scoreContainer}>
            <Text>{match.match.name1} - {match.match.games1}</Text>
        </View>
        </>
    )
};

const styles = StyleSheet.create({
    scoreContainer: {
        marginTop: 100,
        width: '100%',
        borderWidth: 5,
        borderColor: 'red',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 50,
    }
});

export default ShowScreen;