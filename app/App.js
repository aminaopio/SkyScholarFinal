import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons name="school" size={72} color="black" />
      <Text style={styles.title}>Sky Scholar</Text>
      <Text style={styles.subtitle}>Put your aviation knowledge to the test!</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Get Started!')}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Light background for a calm feel
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2c3e50', // Darker text for contrast
  },
  subtitle: {
    fontSize: 18,
    color: '#34495e', // Subtle color for the subtitle
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#800080', // Button color
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
