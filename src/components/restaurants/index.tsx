import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import RestaurantItem from "./horizontal";

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export default function Restaurants() {
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
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
