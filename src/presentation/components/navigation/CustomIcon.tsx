import React from "react";
import { SvgProps } from "react-native-svg";
import HomeFilled from "@assets/icons/filled/home";
import HomeOutline from "@assets/icons/outline/home";
import ExploreFilled from "@assets/icons/filled/explore";
import ExploreOutline from "@assets/icons/outline/explore";
import MapFilled from "@assets/icons/filled/map";
import MapOutline from "@assets/icons/outline/map";
import StoreFilled from "@assets/icons/filled/store";
import StoreOutline from "@assets/icons/outline/store";
import GridOutline from "@assets/icons/outline/grid";
import GridFilled from "@assets/icons/filled/grid";

export type IconName = "home" | "explore" | "map" | "store" | "more";

interface CustomIconProps extends SvgProps {
  name: IconName;
  focused: boolean;
  size: number;
  color: string;
}

const iconMap = {
  home: {
    filled: HomeFilled,
    outline: HomeOutline,
  },

  explore: {
    filled: ExploreFilled,
    outline: ExploreOutline,
  },

  map: {
    filled: MapFilled,
    outline: MapOutline,
  },

  store: {
    filled: StoreFilled,
    outline: StoreOutline,
  },

  more: {
    filled: GridFilled,
    outline: GridOutline,
  },
};

export const CustomIcon = ({ name, focused, size, color }: CustomIconProps) => {
  const IconComponent = focused ? iconMap[name].filled : iconMap[name].outline;
  return <IconComponent size={size} color={color} />;
};
