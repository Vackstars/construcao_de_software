import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SearchDoctorScreen = ({ navigation }) => {
    const [specialty, setSpecialty] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pesquisar Médico</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.specialtyContainer}>
                <Text style={styles.specialtyText}>Selecionar Especialidade</Text>
                <View style={styles.specialties}>
                    <TouchableOpacity
                        style={styles.specialtyButton}
                        onPress={() => navigation.navigate('PesquisarMedicoEsp')}>


                        <Text>Especialidade 1</Text>
                        <Text>Especialidade 2</Text>
                        <Text>Especialidade 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Local de Atendimento</Text>
                <Text style={styles.filterText}>Filtrar por Local</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lista de Estados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lista de Cidades</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.filterText}>Filtrar por Clínica/Hospital</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>Filtrar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ResultadoPesquisaMedico')}
                style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 60,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        fontSize: 30,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginVertical: 20,
    },
    specialtyContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 20,
    },
    specialtyText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    specialties: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
    },
    locationContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 20,
    },
    locationText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    filterText: {
        marginVertical: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
    },
    filterButton: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        marginVertical: 10,
    },
    filterButtonText: {
        color: '#fff',
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        marginVertical: 20,
    },
    searchButtonText: {
        color: '#fff',
    },
});

export default SearchDoctorScreen;