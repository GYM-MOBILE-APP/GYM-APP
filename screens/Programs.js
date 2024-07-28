import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons'; 


// data 
const programs = [
    { id: '1', name: 'Morning Yoga', time: '07:00 - 07:30', duratin: '30 min', description: 'A yoga program to start your day off right.', intensity: 'Low' },
    { id: '2', name: 'Running', time: '08:00 - 08:45', duration: '45 min', description: 'A running session to improve your endurance.', intensity: 'Medium' },
    { id: '3', name: 'Strength Training', time: '09:00 - 10:00', duration: '60 min', description: 'A strength training program to build your muscles.', intensity: 'High' },
    { id: '4', name: 'HIIT', time: '10:30 - 10:50', duration: '20 min', description: 'A high-intensity interval training to burn calories quickly.', intensity: 'Very High' },
    { id: '5', name: 'Pilates', time: '11:00 - 11:40', duration: '40 min', description: 'A pilates program to improve your flexibility and posture.', intensity: 'Low' },
    { id: '6', name: 'Cycling', time: '12:00 - 12:50', duration: '50 min', description: 'A cycling session to work your legs and cardio.', intensity: 'Medium' },
    { id: '7', name: 'Boxing', time: '14:00 - 14:45', duration: '45 min', description: 'A boxing workout to improve your strength and endurance.', intensity: 'High' },
    { id: '8', name: 'Cardio Dance', time: '15:00 - 15:35', duration: '35 min', description: 'A cardio dance program to burn calories while having fun.', intensity: 'Medium' },
    { id: '9', name: 'Stretching', time: '16:00 - 16:25', duration: '25 min', description: 'A stretching program to improve your flexibility and prevent injuries.', intensity: 'Low' },
    { id: '10', name: 'CrossFit', time: '17:00 - 17:55', duration: '55 min', description: 'A CrossFit workout for complete physical conditioning.', intensity: 'Very High' },
  ];

const getIconName = (programName) => { 
    switch(programName.toLowerCase()) {
        case 'morning yoga':
            return 'self-improvement';
        case 'running':
            return 'directions-run';
        case 'strength training':
            return 'fitness-center';
        case 'hiit':
            return 'whatshot';
        case 'pilates':
            return 'self-improvement';
        case 'cycling':
            return 'directions-bike';
        case 'boxing':
            return 'sports-mma';
        case 'cardio dance':
            return 'sports-kabaddi';
        case 'stretching':
            return 'self-improvement';
        case 'crossfit':
            return 'fitness-center';
        default:
            return 'sports';
    }
};

const Programs = () => {
    const renderItem = ({ item }) => (
        <View style={styles.programContainer}>
            <View style={styles.programHeader}>
                <MaterialIcons name={getIconName(item.name)} size={24} color="#FFD700" style={styles.icon} /> 
                <Text style={styles.programName}>{item.name}</Text>
            </View>
            <Text style={styles.programTime}>Time: {item.time}</Text>
            <Text style={styles.programDuration}>Duration: {item.duration}</Text>
            <Text style={styles.programDescription}>{item.description}</Text>
            <Text style={styles.programIntensity}>Intensity: {item.intensity}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={programs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000000', 
    },
    programContainer: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#1c1c1c', 
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    programHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    programName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700', 
    },
    programTime: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF8C00',
    },
    programDuration: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#00FFFF',
    },
    programDescription: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF6347', 
    },
    programIntensity: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ADFF2F', 
    },
});

export default Programs;