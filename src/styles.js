import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6E8EE',
    },
    button: {
        backgroundColor: '#02457A',
    },
    input: {
        width: '80%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#fff', // Cor de fundo do TextInput
        color: '#fff', // Cor do texto digitado
        borderColor: '#fff', // Cor da borda
    },
    m(type, value) {
        const margin = {
            b: "marginBottom",
            t: "marginTop",
            l: "marginLeft",
            r: "marginRight",
        }[type];
        return { [margin ?? "margin"]: value };
    },
})