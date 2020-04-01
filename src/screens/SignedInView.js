import React, { useContext } from "react";
import { View, StyleSheet, Text, TextInput} from "react-native";
import { Context as ScoresContext } from "../context/ScoresContext";
import CreateMatchForm from "../Components/CreateMatchForm";
import DisplayMatch from "../Components/DisplayMatch";
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../Components/Spacer';
const SignedInView = ({ navigation }) => {
  const { createMatch } = useContext(ScoresContext);
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Button
        title="Add Match"
        onPress={() => navigation.navigate("Create")}
      />
      <Spacer>
      <Button title="Sign out" onPress={signout}/>
      </Spacer>
      <DisplayMatch onSubmit={(id) => navigation.navigate('Edit',id)}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignedInView;
