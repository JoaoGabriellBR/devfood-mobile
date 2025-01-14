import { View, Pressable, Text, Image } from "react-native";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export default function CardHorizontalFood({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col items-start rounded-xl">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View className=" flex flex-row justify-center items-center bg-black rounded-full px-2 py-1 absolute top-2 right-2">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>

        <Text className="text-green-700 font-medium text-lg mt-1">
          R$ {food.price}
        </Text>
        <Text className="font-semibold mt-1">{food.name}</Text>
        <Text className="text-neutral-600 text-sm mt-1">
          {food.time} - R$ {food.delivery}
        </Text>
    </Pressable>
  );
}
