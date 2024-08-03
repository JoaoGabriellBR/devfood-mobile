import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="w-full items-center justify-between flex-row">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="flex flex-col justify-center items-center">
        <Text className="text-center text-sm">Localização</Text>

        <View className="flex flex-row justify-center items-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="font-bold text-lg">Campo Grande</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}
