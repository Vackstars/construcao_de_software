import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SearchDoctorsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pesquisar Médico</Text>
            <View style={styles.line} />
            <Text style={styles.doctorsHeader}>Médicos</Text>
            <View style={styles.doctorContainer}>
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Dr. João da Silva</Text>
                    <Text style={styles.specialties}>Cardiologista e Cirurgião</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SolicitacaoConsultaData')}
                    style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.doctorContainer}>
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Dra. Maria Oliveira</Text>
                    <Text style={styles.specialties}>Pediatra e Ginecologista</Text>
                </View>
                <TouchableOpacity style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.doctorContainer}>
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Dr. Rafael dos Santos</Text>
                    <Text style={styles.specialties}>Ortopedista e Traumatologista</Text>
                </View>
                <TouchableOpacity style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.doctorContainer}>
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>Dr. Luiz Fernando</Text>
                    <Text style={styles.specialties}>Clínico Geral e Neurologista</Text>
                </View>
                <TouchableOpacity style={styles.selectButton}>
                    <Text style={styles.selectButtonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 16,
    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        alignSelf: 'center',
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 16,
    },
    doctorsHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
    },
    doctorContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    doctorInfo: {
        flex: 1,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    specialties: {
        fontSize: 16,
        color: 'gray',
    },
    selectButton: {
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    selectButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SearchDoctorsScreen;