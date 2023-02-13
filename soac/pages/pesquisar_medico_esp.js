import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SelectSpecialtyScreen = ({ navigation }) => {
    const [specialty, setSpecialty] = React.useState('');

    const handleConfirm = () => {
        // Aqui você pode adicionar o código para enviar a especialidade selecionada para a próxima tela
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Selecionar Especialidade</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Digite a especialidade desejada"
                onChangeText={setSpecialty}
                value={specialty}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: '40%',
        height: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default SelectSpecialtyScreen;