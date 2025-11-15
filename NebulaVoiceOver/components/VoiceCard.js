import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function VoiceCard({ title, onPlay }) {
  return (
    <View className="bg-gray-900 p-4 rounded-xl mb-3 flex-row justify-between items-center">
      <Text className="text-white" style={{flex:1}}>{title}</Text>
      <TouchableOpacity onPress={onPlay} className="bg-nebulaBlue px-3 py-2 rounded-lg ml-3">
        <Text className="text-white">Play</Text>
      </TouchableOpacity>
    </View>
  );
}
