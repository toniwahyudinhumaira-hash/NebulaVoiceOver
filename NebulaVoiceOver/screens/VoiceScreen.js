import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Speech from 'expo-speech';

export default function VoiceScreen() {
  const [text, setText] = useState('Halo dari NebulaVoiceOver.');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text || text.trim().length === 0) {
      Alert.alert('Teks kosong', 'Masukkan teks terlebih dahulu.');
      return;
    }
    setIsSpeaking(true);
    Speech.speak(text, {
      rate: 1,
      pitch: 1,
      onDone: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  };

  const handleStop = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  return (
    <View className="flex-1 bg-[#0b0f1a] px-6 py-8">
      <Text className="text-nebulaBlue text-2xl font-bold mb-4">Voice Editor</Text>

      <Text className="text-gray-300 mb-2">Teks</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={6}
        placeholder="Ketik teks di sini..."
        placeholderTextColor="#9CA3AF"
        className="bg-gray-900 text-white p-4 rounded-lg mb-4"
        style={{ minHeight: 120 }}
      />

      <TouchableOpacity
        onPress={handleSpeak}
        className="bg-nebulaBlue py-3 rounded-xl mb-3 items-center"
      >
        <Text className="text-white font-semibold">{isSpeaking ? 'Playing...' : 'Generate & Play'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleStop}
        className="bg-nebulaPurple py-3 rounded-xl items-center"
      >
        <Text className="text-white font-semibold">Stop</Text>
      </TouchableOpacity>

      <Text className="text-gray-400 text-sm mt-6">
        Catatan: Ini TTS lokal (expo-speech). Nanti akan ditambah opsi AI voice (ElevenLabs) dan export mp3.
      </Text>
    </View>
  );
}
