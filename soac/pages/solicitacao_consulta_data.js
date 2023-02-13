import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, TextInput, } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const daysInMonth = 31;

const DateScreen = ({ navigation }) => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [month, setMonth] = useState('');

    const handleDayPress = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Data da consulta</Text>
            </View>
            <View style={styles.line} />
            <Text style={styles.subheader}>Selecione o mês e o dia</Text>
            <TextInput
                value={month}
                onChangeText={setMonth}
                placeholder="Mês"
                style={styles.monthInput}
            />
            <ScrollView contentContainerStyle={styles.daysContainer}>
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                    <TouchableOpacity
                        key={day}
                        style={[
                            styles.dayButton,
                            selectedDays.includes(day) && styles.selectedDayButton,
                        ]}
                        onPress={() => handleDayPress(day)}
                    >
                        <Text>{day}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('HorarioConsulta')}
                style={styles.nextButton}>
                <Text>Próximo</Text>
            </TouchableOpacity>
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
    monthInput: {
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    dayButton: {
        width: (screenWidth - 60) / 6,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDayButton: {
        backgroundColor: 'lightgray',
    },
    nextButton: {
        height: 60,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '20%',
    },
});

export default DateScreen;