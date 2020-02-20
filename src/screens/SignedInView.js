import React, { useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/ScoresContext";
import CreateMatchForm from "../Components/CreateMatchForm";
import DisplayMatch from "../Components/DisplayMatch";

const SignedInView = ({ navigation }) => {
  const { createMatch } = useContext(Context);
  return (
    <View>
      <Button
        title="Add Match"
        onPress={() => navigation.navigate("Create")}
      />
      <DisplayMatch onSubmit={(id) => navigation.navigate('Edit',id)}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignedInView;
