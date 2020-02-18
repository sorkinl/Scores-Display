import React from "react";
import { View, StyleSheet, Text, FlatList, Button, } from "react-native";
import DisplayMatch from "../Components/DisplayMatch";

const ViewScreen = ({navigation}) => {
  
  return (
    <View>
        <DisplayMatch navigation={navigation}/>
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
