import React, { useContext, useState } from 'react';
import  { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as ScoresContext } from '../context/ScoresContext';
const SigninScreen = () => {
    const { state, signin } = useContext(ScoresContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    

    return (
        <View style={styles.container}>
        <Spacer>
            <Text h3> Sign In </Text>
        </Spacer>
            <Input 
            label="Login" 
            value={login} 
            onChangeText={setLogin}
            autoCapitalize="none"
            autoCorrect={false}/>
        <Spacer />
            <Input label="Password"
             value={password} 
             onChangeText={setPassword}
             autoCapitalize="none"
             autoCorrect={false}
             secureTextEntry
             />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
        <Spacer />
        <Spacer>
            <Button title="Sign In" onPress={() => signin({ login, password })}/>
        </Spacer>
        </View>
)};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SigninScreen;