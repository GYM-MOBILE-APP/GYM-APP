
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NOTIFICATIONS } from '../data/dummy-data';

const Notifications = () => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <MaterialIcons name="notifications" size={24} color="#FFD700" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  notificationItem: {
    backgroundColor: '#1e1e1e',
    marginBottom: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#2c2c2c',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
  },
  notificationDate: {
    fontSize: 14,
    color: '#FFD700',
    marginTop: 4,
    fontFamily: 'Roboto-Regular',
  },
  flatListContent: {
    paddingBottom: 24,
  },
});

export default Notifications;
