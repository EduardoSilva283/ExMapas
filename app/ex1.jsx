import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Styles } from '../src/styles'
import * as React from 'react';
import { TextInput, Button, HelperText, Text } from 'react-native-paper';

export default function Ex1() {
    const [distancia, setDistancia] = React.useState("");
    const [tempo, setTempo] = React.useState("");
    const [massage, setMessage] = React.useState("");
    const [result, setResult] = React.useState("");

    const handleButton = () => {
        setMessage("");
        let messages = [];
        const dist = parseFloat(distancia);
        const time = parseFloat(tempo);
        if (isNaN(dist) || dist <= 0) messages.push("Distância inválida");
        if (isNaN(time) || time <= 0) messages.push("Tempo inválido");
        if (messages.length > 0) {
            setMessage(messages.join(" | "));
            setResult("");
            return;
        }
        const calculo = dist / time;
        setResult(calculo.toFixed(2) + " M/s");
    }

    return (
        <View style={Styles.container}>
            <Stack.Screen options={{ title: "Exercício 1" }} />
            <TextInput
                style={Styles.input}
                label='Distância em Metros'
                value={distancia}
                onChangeText={distancia => setDistancia(distancia)}
                keyboardType='numeric'
            />
            <TextInput
                style={[Styles.input]}
                label='Tempo em Segundos'
                value={tempo}
                onChangeText={tempo => setTempo(tempo)}
                keyboardType='numeric'
            />
            <Button
                style={Styles.button}
                icon="calculator"
                mode="contained"
                onPress={handleButton}>
                Calcular
            </Button>
            <HelperText type="error" visible={true}>
                {massage}
            </HelperText>
            <Text variant="displaySmall">{result}</Text>
        </View>
    );
}