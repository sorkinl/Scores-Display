import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { Context } from "../context/ScoresContext";

const ViewScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  console.log(state);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={score => score.id}
        renderItem={({ item }) => {
          return (<Text>{item.id}</Text>);
        }}
      />
      <Button
        title="SignedIn"
        onPress={() => navigation.navigate("SignedIn")}
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
