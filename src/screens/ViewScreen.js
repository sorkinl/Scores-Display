import React, {useEffect, useContext} from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import DisplayMatch from "../Components/DisplayMatch";
import { Button } from 'react-native-elements'
import { Context as ScoresContext} from '../context/ScoresContext';

const ViewScreen = ({navigation}) => {
 /*  const {state, getMatches} = useContext(ScoresContext); */
  /* useEffect(()=> {
    getMatches();
  }, []) */
  return (
    <View>
        <DisplayMatch onSubmit={(id) => {navigation.navigate('Show',id)}} navigation={navigation}/>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("Signin")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 100
  }
});

export default ViewScreen;
