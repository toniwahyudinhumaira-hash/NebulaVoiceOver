import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import VoiceScreen from './screens/VoiceScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 bg-[#0b0f1a]">
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#0b0f1a' },
            headerTintColor: '#00adff',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#0b0f1a' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Voice" component={VoiceScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
