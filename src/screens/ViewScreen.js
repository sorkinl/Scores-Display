import React from "react";
import { View, StyleSheet, Text, FlatList, Button, } from "react-native";
import DisplayMatch from "../Components/DisplayMatch";

const ViewScreen = ({navigation}) => {
  
  return (
    <View>
        <DisplayMatch onSubmit={(id) => {navigation.navigate('Show',id)}} navigation={navigation}/>
      <Button
        title="Sign In"
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
