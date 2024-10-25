import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import  { Input, InputProps } from './input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default: StoryFn<InputProps> = Template.bind({});
Default.args = {
  label: 'Nome',
  placeholder: 'Digite seu nome',
};
