import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CancelAppointmentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.cancelText}>Cancelar consulta</Text>
            <Text style={styles.questionText}>Tem certeza que deseja cancelar sua consulta?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.yesButton} onPress={() => { }}>
                    <Text style={styles.yesButtonText}>SIM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => { navigation.goBack() }}>
                    <Text style={styles.noButtonText}>NÃO</Text>
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
    cancelText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    questionText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    yesButton: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
    },
    yesButtonText: {
        fontSize: 18,
        textAlign: 'center',
    },
    noButton: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
    },
    noButtonText: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default CancelAppointmentScreen;