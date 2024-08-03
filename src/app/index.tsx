import { ScrollView, View } from "react-native";
import Constants from "expo-constants";
import Header from "../components/header";
import Banner from "../components/banner";
import Search from "../components/search";
import { Section } from "../components/section";
import TrendingFoods from "../components/trending";
import Restaurants from "../components/restaurants";
import RestaurantVerticalList from "../components/restaurantList";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      className="bg-slate-200"
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais"
        action={() => console.log("clicou no veja mais")}
      />

      <TrendingFoods />

      <Section
        name="Famosos no DevFood"
        size="text-xl"
        label="Veja todos"
        action={() => console.log("clicou no veja todos")}
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Veja todos"
        action={() => console.log("clicou no veja todos")}
      />

      <RestaurantVerticalList />
    </ScrollView>
  );
}
