import React from 'react';
import { View, Text, FlatList } from 'react-native';

const sample = [
  { id: '1', title: 'Demo voice 1' },
  { id: '2', title: 'Demo voice 2' },
];

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-[#0b0f1a] px-4 py-6">
      <Text className="text-nebulaBlue text-2xl font-bold mb-4">History</Text>

      <FlatList
        data={sample}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View className="bg-gray-900 p-4 rounded-lg mb-3">
            <Text className="text-white">{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
