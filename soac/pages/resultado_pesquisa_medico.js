import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ResultSearchDoctorsScreen = ({ navigation, route }) => {

    const [doctors, setDoctors] = useState('');

    const [specialty, setSpecialty] = useState('');


    const doctorsData = require('../files/medicos.json');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>Pesquisar Médico</Text>
                <View style={styles.line} />
                <Text style={styles.doctorsHeader}>Médicos</Text>
                {/* <Text>{JSON.stringify(route.params.specialty_)}</Text> */}

                {/* {doctorsData.map(doctor => (
                
                < View style = { styles.doctorContainer } >
                    <View style={styles.doctorInfo} key={doctor.id}>
                        <Text style={styles.doctorName}>{doctor.name}</Text>
                        <Text style={styles.specialties}>{doctor.specialty}</Text>
                    </View>
                    <TouchableOpacity style={styles.selectButton}>
                        <Text style={styles.selectButtonText}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            
            ))} */}

                {/* Render only the doctors that have specialty == specialty_ */}
                {doctorsData.map(doctor => {
                    if (doctor.specialty == route.params.specialty_) {
                        return (
                            < View style={styles.doctorContainer} >
                                <View style={styles.doctorInfo} key={doctor.id}>
                                    <Text style={styles.doctorName}>{doctor.name}</Text>
                                    <Text style={styles.specialties}>{doctor.specialty}</Text>
                                </View>
                                <TouchableOpacity style={styles.selectButton}>
                                    <Text
                                        onPress={() => { navigation.navigate('SolicitacaoConsultaData') }}
                                        style={styles.selectButtonText}>Selecionar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                })}

            </View >
        </ScrollView>
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

export default ResultSearchDoctorsScreen;