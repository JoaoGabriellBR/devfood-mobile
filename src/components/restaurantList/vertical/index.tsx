import { View, Text, Pressable, Image } from "react-native";
import { RestaurantProps } from "../../restaurants";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantItemVertical({
  restaurant,
}: {
  restaurant: RestaurantProps;
}) {
  return (
    <Pressable
      className="flex flex-row items-center justify-start gap-2"
      onPress={() => console.log(`clicou no restaurante ${restaurant.name}`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View className="flex gap-2">
        <Text
          className="text-base leading-4 font-bold text-black"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>

        <View className="flex flex-row items-center justify-start gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
