import { FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import CardHorizontalFood from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export default function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  const getFoods = async function () {
    const response = await fetch("http://192.168.100.2:3000/foods");
    const data = await response.json();
    setFoods(data);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
