import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { BasketIcon, IconColor } from "./icons";

export default {
  title: 'Components / Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Primary button with icon"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  text: "Primary button with icon"
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  icon: <BasketIcon color={IconColor.WHITE} />,
  variant: "primary",
  text: "Primary button with icon"
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  icon: <BasketIcon />,
  variant: "secondary",
  text: "Primary button with icon"
};
