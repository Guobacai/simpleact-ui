import React from 'react';
import ButtonGroup from '../ButtonGroup';
import { ButtonProps } from '../../Button';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const buttons: ButtonProps[] = [
  {
    children: 'Undo',
    icon: 'rotate-left',
    action: 'secondary',
  },
  {
    children: 'Edit',
    icon: 'pencil',
    action: 'secondary',
  },
  {
    children: 'Create',
    icon: 'plus',
    action: 'secondary',
  },
];

export function Default() {
  return <ButtonGroup buttons={buttons}></ButtonGroup>;
}

export function IconOnly() {
  return <ButtonGroup variations="icon" buttons={buttons}></ButtonGroup>;
}

export function LeadingIcon() {
  return <ButtonGroup variations="leadingIcon" buttons={buttons}></ButtonGroup>;
}

export function TailingIcon() {
  return (
    <ButtonGroup variations="trailingIcon" buttons={buttons}></ButtonGroup>
  );
}

export function VerticalButtonGroup() {
  return (
    <ButtonGroup
      variations="leadingIcon"
      orientation="vertical"
      buttons={buttons}
    ></ButtonGroup>
  );
}

export function ButtonGroupSizes() {
  return (
    <div className="flex flex-col gap-5">
      <ButtonGroup buttons={buttons} size="sm"></ButtonGroup>
      <ButtonGroup buttons={buttons} size="md"></ButtonGroup>
      <ButtonGroup buttons={buttons} size="lg"></ButtonGroup>
    </div>
  );
}

export function MixButtonGroup() {
  const modifiedButtons = buttons.map((button, index) =>
    index === 1 ? { ...button, action: 'primary' } : button
  );

  return <ButtonGroup buttons={modifiedButtons}></ButtonGroup>;
}
