import React from 'react';

import { Tag as TagComponent } from "./Tag";
import { Stepper as StepperComponent } from "./Stepper";
import { Dropdown as DropdownComponent } from "./Dropdown";

export default {
  title: 'Components / Controls'
};

export const Tag = (args) => <TagComponent {...args}/>;
Tag.args = {
  children: "Title",
  selected: false
}

export const Stepper = (args) => <StepperComponent {...args}/>;
Stepper.args = {
  children: "Title"
}

export const Dropdown = (args) => <DropdownComponent {...args}/>;
Dropdown.args = {
  children: "Title"
}
