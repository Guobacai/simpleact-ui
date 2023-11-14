import React from 'react';
import { Meta } from '@storybook/react';
import { Label } from '../Label';

export default {
  title: 'Components/Label',
  componentl: Label,
} as Meta;

export const LabelStory = () => {
  return <Label>Label</Label>;
};

export const DisabledLabelStory = () => {
  return <Label disabled>Disabled Label</Label>;
};

export const LabelSizeStory = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <Label size="lg" disabled>
          heading-05
        </Label>
        <Label size="lg" disabled>
          16px
        </Label>
        <Label size="lg">Large Label</Label>
      </div>
      <div className="flex gap-3">
        <Label disabled>heading-06</Label>
        <Label disabled>14px</Label>
        <Label>Medium Label</Label>
      </div>
      <div className="flex gap-3">
        <Label size="sm" disabled>
          heading-07
        </Label>
        <Label size="sm" disabled>
          12px
        </Label>
        <Label size="sm">Small Label</Label>
      </div>
    </div>
  );
};
