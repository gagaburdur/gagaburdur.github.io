import type { FunctionComponent, SVGProps } from "react";

import Bread from "../assets/bread.svg?react";
import Burger from "../assets/burger.svg?react";
import Cocktail from "../assets/cocktail.svg?react";
import Cream from "../assets/cream.svg?react";
import Cup from "../assets/cup.svg?react";
import Fries from "../assets/fries.svg?react";
import Knife from "../assets/knife.svg?react";
import Leaf from "../assets/leaf.svg?react";
import Meat from "../assets/meat.svg?react";
import Mustache from "../assets/mustache.svg?react";
import Pan from "../assets/pan.svg?react";
import Seaweed from "../assets/seaweed.svg?react";


type IconComponent = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string; titleId?: string; desc?: string; descId?: string }
>;

const iconMap: Record<string, IconComponent> = {
  burger: Burger,
  mustache: Mustache,
  bread: Bread,
  meat: Meat,
  leaf: Leaf,
  fries: Fries,
  cream: Cream,
  knife: Knife,
  pan: Pan,
  seaweed: Seaweed,
  cup: Cup,
  cocktail: Cocktail,
};

interface DecorativeIconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const DecorativeIcon = ({ name, ...props }: DecorativeIconProps) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
};

export default DecorativeIcon;
