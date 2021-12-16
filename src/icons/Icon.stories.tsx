import React from 'react';

import { IconColor } from "./IconColor";
import { HomeIcon } from "./HomeIcon";
import { SearchIcon } from "./SearchIcon";
import { StarIcon } from "./StarIcon";
import { BasketIcon } from "./BasketIcon";

export default {
  title: 'Icons',
  argTypes: {
    color: {
      options: Object.values(IconColor),
      control: { type: 'select' }
    }
  }
};


export const Home = (args) => <HomeIcon {...args} />;
Home.args = {
  color: IconColor.PEACH
};
Home.parameters = {
  component: HomeIcon
};

export const Search = (args) => <SearchIcon {...args} />;
Search.args = {
  color: IconColor.PEACH
};
Search.parameters = {
  component: SearchIcon
};

export const Star = (args) => <StarIcon {...args} />;
Star.args = {
  color: IconColor.PEACH
};
Star.parameters = {
  component: SearchIcon
};

export const Basket = (args) => <BasketIcon {...args} />;
Basket.args = {
  color: IconColor.PEACH
};
Basket.parameters = {
  component: SearchIcon
};

