import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';

const TimeScreen = ({ navigation }) => {
    const [time, setTime] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Horário da consulta</Text>
            </View>
            <View style={styles.line} />
            <Text style={styles.subheader}>Informe o horário</Text>
            <TextInput
                value={time}
                onChangeText={setTime}
                placeholder="hh/mm"
                style={styles.timeInput}
            />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ConfirmarConsulta')}
                    style={styles.nextButton}>
                    <Text>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    line: {
        height: 1,
        backgroundColor: 'black',
    },
    subheader: {
        padding: 20,
        fontSize: 16,
    },
    timeInput: {
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    actions: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cancelButton: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
    },
    nextButton: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
});

export default TimeScreen;