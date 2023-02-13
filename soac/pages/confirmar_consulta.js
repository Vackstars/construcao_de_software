import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmConsultation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Confirmar Consulta</Text>
            <Text style={styles.descriptionText}>
                Ao confirmar, a consulta ficará pendente até ser aprovada pelo médico.
                Após a aprovação, as informações ficarão visíveis na sua agenda.
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirmar</Text>
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
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 10,
        marginRight: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 10,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ConfirmConsultation;