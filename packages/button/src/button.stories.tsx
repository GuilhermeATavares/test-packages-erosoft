import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import  { Button, ButtonProps } from './button';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  label: 'Clique Aqui',
  onClick: () => alert('Botão clicado!'),
};
