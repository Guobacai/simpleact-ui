import React from 'react';
import { Meta } from '@storybook/react';
import { Switch } from '../Switch';

export default {
  title: 'Components/Switch',
  componentl: Switch,
} as Meta;

export const BaseSwitchStory = () => {
  return (
    <div className="flex flex-col gap-3">
      <Switch active label="Active" />
      <Switch label="Inactive"></Switch>
    </div>
  );
};

export const ErrorSwitchStory = () => {
  return (
    <div className="flex flex-col gap-3">
      <Switch active error label="Active Error"></Switch>
      <Switch error label="Inactive Error"></Switch>
    </div>
  );
};

export const DisabledSwitchStory = () => {
  return <Switch disabled label="Disabled"></Switch>;
};

export const AutoAlignedSwitchStory = () => {
  return (
    <div className="w-52 border border-neutral-200 p-2">
      <Switch autoAligned label="Auto Aligned"></Switch>
    </div>
  );
};

export const SwitchOrientationStory = () => {
  return (
    <div>
      <Switch label="Left Label"></Switch>
      <Switch label="Right Label" orientation="right"></Switch>
    </div>
  );
};
