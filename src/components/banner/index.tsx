import { View, Image, Pressable } from "react-native";
import PagerView from "react-native-pager-view";

export default function Banner() {
  return (
    <View className="w-full h-36 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="1">
          <Image
            source={require("../../assets/banner1.png")}
            className="w-full h-36 rounded-2xl md:h-60"
          />
        </Pressable>

        <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="2">
          <Image
            source={require("../../assets/banner2.png")}
            className="w-full h-36 rounded-2xl md:h-60"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
