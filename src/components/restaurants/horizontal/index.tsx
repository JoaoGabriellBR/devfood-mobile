import { View, Text, Pressable, Image } from "react-native";
import { RestaurantProps } from "..";

export default function RestaurantItem({
  restaurant,
}: {
  restaurant: RestaurantProps;
}) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log(`clicou no restaurante ${restaurant.name}`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-2 text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
