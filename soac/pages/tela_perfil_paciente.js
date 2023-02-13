import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button } from 'react-native';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 20,
        alignItems: 'center',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: 'gray',
    },
    divider: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        width: '90%',
    },
    agendaContainer: {
        padding: 20,
    },
    agendaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    agendaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    agendaMonth: {
        fontSize: 16,
        marginRight: 10,
    },
    agendaDay: {
        fontSize: 16,
        marginRight: 10,
    },
    agendaDescription: {
        fontSize: 16,
    },
    optionsButtonContainer: {
        alignItems: 'flex-end',
        padding: 20,
    },
    optionsButton: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
    },
    optionsButtonText: {
        fontSize: 14,
    },
};

const Profile = ({ navigation }) => (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profilePicture}
                    source={{ uri: 'https://via.placeholder.com/100x100' }}
                />
                <View>
                    <Text style={styles.name}>Nome do Paciente</Text>
                    <Text style={styles.email}>email@exemplo.com</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.agendaContainer}>
                <Text style={styles.agendaTitle}>Agenda</Text>
                <View style={styles.agendaRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InformacoesConsulta')}
                        style={styles.agendaRow}
                    >
                        <Text style={styles.agendaMonth}>Dezembro</Text>
                        <Text style={styles.agendaDay}>24</Text>
                        <Text style={styles.agendaDescription}>Consulta com o Dr. João</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.agendaRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InformacoesConsulta')}
                        style={styles.agendaRow}
                    >
                        <Text style={styles.agendaMonth}>Dezembro</Text>
                        <Text style={styles.agendaDay}>25</Text>
                        <Text style={styles.agendaDescription}>Retorno com a Dra. Maria</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.agendaRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InformacoesConsulta')}
                        style={styles.agendaRow}
                    >
                        <Text style={styles.agendaMonth}>Dezembro</Text>
                        <Text style={styles.agendaDay}>26</Text>
                        <Text style={styles.agendaDescription}>Exame de sangue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.optionsButtonContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('TelaPerfilPacienteOpcoes')}
                style={styles.optionsButton}>
                <Text style={styles.optionsButtonText}>Opções</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
);

export default Profile