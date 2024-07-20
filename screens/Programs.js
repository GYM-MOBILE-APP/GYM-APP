import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import programs from '../data/dummy-data.js'; 
import { MaterialIcons } from '@expo/vector-icons'; 

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
