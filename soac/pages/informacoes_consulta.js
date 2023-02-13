import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ConsultInformation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Informações de Consulta</Text>
            <View style={styles.calendarContainer}>
                <Image Image />
                <View style={styles.divider} />
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.label}>Data:</Text>
                <Text>dd/mm/aaaa</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.label}>Hora:</Text>
                <Text>hh:mm</Text>
            </View>
            <View style={styles.doctorContainer}>
                <Text style={styles.doctorLabel}>Médico</Text>
                <View style={styles.doctorDetails}>
                    <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>Nome do Médico</Text>
                        <Text>Especialidade 1</Text>
                        <Text>Especialidade 2</Text>
                    </View>
                    <Image Image />
                </View>
            </View>
            <View style={styles.locationContainer}>
                <Text style={styles.locationLabel}>Local de Atendimento</Text>
                <View style={styles.locationDetails}>
                    <View style={styles.locationInfo}>
                        <Text style={styles.locationName}>Nome do Local</Text>
                        <Text>Cidade</Text>
                        <Text>Endereço</Text>
                    </View>
                    <Image Image />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('CancelarConsultas')}
                style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancelar Consulta</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    backButton: {
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,
    },
    header: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
    },
    calendarContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    divider: {
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        alignSelf: 'center',
        marginLeft: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    label: {
        fontWeight: 'bold',
    },
    timeContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    doctorContainer: {
        marginTop: 20,
    },
    doctorLabel: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    doctorDetails: {
        flexDirection: 'row',
    },
    doctorInfo: {
        marginRight: 20,
    },
    doctorName: {
        fontWeight: 'bold',
    },
    locationContainer: {
        marginTop: 20,
    },
    locationLabel: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    locationDetails: {
        flexDirection: 'row',
    },
    locationInfo: {
        marginRight: 20,
    },
    locationName: {
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ConsultInformation;