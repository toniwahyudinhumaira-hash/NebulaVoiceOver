import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-[#0b0f1a] items-center justify-center">
      <Text className="text-nebulaBlue text-3xl font-bold mb-8">
        Nebula VoiceOver
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Voice')}
        className="bg-nebulaBlue py-4 px-6 rounded-2xl mb-4"
      >
        <Text className="text-white text-lg font-bold">
          Generate Voice
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        className="bg-nebulaPurple py-4 px-6 rounded-2xl"
      >
        <Text className="text-white text-lg font-bold">
          History
        </Text>
      </TouchableOpacity>
    </View>
  );
}
