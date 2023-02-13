import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SearchDoctorScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => navigation.navigate('PesquisarMedico', { specialty: 'Cardiologista' })}
            >
                <Text style={styles.searchButtonText}>Pesquisar Médicos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.exitButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.exitButtonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButton: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        marginBottom: 16,
    },
    searchButtonText: {
        fontSize: 24,
        textAlign: 'center',
    },
    exitButton: {
        backgroundColor: 'lightgray',
        padding: 16,
        borderRadius: 8,
        width: '80%',
    },
    exitButtonText: {
        fontSize: 24,
        textAlign: 'center',
    },
});

export default SearchDoctorScreen;