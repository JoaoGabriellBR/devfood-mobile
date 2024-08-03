import { View, Text, Pressable, FlatList } from "react-native";
import { RestaurantProps } from "../restaurants";
import { useState, useEffect } from "react";
import RestaurantItemVertical from "./vertical";

export default function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  const getFoods = async function () {
    const response = await fetch("http://192.168.100.2:3000/restaurants");
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItemVertical restaurant={item} key={item.id} />
      ))}
    </View>
  );
}
