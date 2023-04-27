import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  className: '',
  variant: 'basic',
  type: 'primary',
  size: 'md',
  text: 'Button',
};

export const ButtonVariationsStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h1 className="text-2xl font-medium mb-2">Buttons</h1>

      <h2 className="text-xl mt-6">Variations</h2>
      <div className="mt-1 flex gap-5">
        <Button variant="icon" icon="plus"></Button>
        <Button>Submit</Button>
        <Button variant="leadingIcon" icon="plus">
          Create
        </Button>
        <Button variant="trailingIcon" icon="plus">
          Create
        </Button>
      </div>

      <h2 className="text-xl mt-6">Action Types</h2>
      <div className="flex gap-5">
        <Button className="w-32">Primary</Button>
        <Button className="w-32" action="secondary">
          Secondary
        </Button>
        <Button className="w-32" action="info">
          Info
        </Button>
        <Button className="w-32" action="contrast">
          Contrast
        </Button>
        <Button className="w-32" action="destructive">
          Destructive
        </Button>
      </div>

      <h2 className="text-xl mt-6">Ephasis</h2>
      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20">Bold</Button>
          <Button className="w-20" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="secondary">
            Bold
          </Button>
          <Button className="w-20" action="secondary" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="secondary" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="info">
            Bold
          </Button>
          <Button className="w-20" action="info" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="info" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="destructive">
            Bold
          </Button>
          <Button className="w-20" action="destructive" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="destructive" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly bg-slate-500">
          <Button className="w-20" action="contrast">
            Bold
          </Button>
          <Button className="w-20" action="contrast" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="contrast" emphasis="minimal">
            Minimal
          </Button>
        </div>
      </div>
      <h2 className="text-xl mt-6">Shape</h2>
      <div className="grid grid-rows-2 gap-5">
        <div className="row-span-1 flex gap-3">
          <Button>Square</Button>
          <Button variant="icon" icon="paper-plane"></Button>
        </div>
        <div className="row-span-1 flex gap-3">
          <Button shape="circle">Circle</Button>
          <Button shape="circle" variant="icon" icon="paper-plane"></Button>
        </div>
      </div>
    </div>
  );
};
ButtonVariationsStory.storyName = 'Button Variations';

export const ButtonStates = () => {
  return (
    <div className="card max-w-800 p-3">
      <h2 className="text-xl mt-6">States</h2>
      <h3 className="text-xl mt-6">Primary</h3>

      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20">Bold</Button>
          <Button className="w-20" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" disabled>
            Disabled
          </Button>
          <Button className="w-20" emphasis="subtle" disabled>
            Disabled
          </Button>
          <Button className="w-20" emphasis="minimal" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <h3 className="text-xl mt-6">Secondary</h3>

      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="secondary">
            Bold
          </Button>
          <Button className="w-20" action="secondary" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="secondary" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="secondary" disabled>
            Disabled
          </Button>
          <Button
            className="w-20"
            action="secondary"
            emphasis="subtle"
            disabled
          >
            Disabled
          </Button>
          <Button
            className="w-20"
            action="secondary"
            emphasis="minimal"
            disabled
          >
            Disabled
          </Button>
        </div>
      </div>

      <h3 className="text-xl mt-6">Info</h3>

      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="info">
            Bold
          </Button>
          <Button className="w-20" action="info" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="info" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="info" disabled>
            Disabled
          </Button>
          <Button className="w-20" action="info" emphasis="subtle" disabled>
            Disabled
          </Button>
          <Button className="w-20" action="info" emphasis="minimal" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <h3 className="text-xl mt-6">Contrast</h3>

      <div className="grid grid-rows-5 gap-5 bg-slate-500 py-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="contrast">
            Bold
          </Button>
          <Button className="w-20" action="contrast" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="contrast" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="contrast" disabled>
            Disabled
          </Button>
          <Button className="w-20" action="contrast" emphasis="subtle" disabled>
            Disabled
          </Button>
          <Button
            className="w-20"
            action="contrast"
            emphasis="minimal"
            disabled
          >
            Disabled
          </Button>
        </div>
      </div>

      <h3 className="text-xl mt-6">Destructive</h3>

      <div className="grid grid-rows-5 gap-5">
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="destructive">
            Bold
          </Button>
          <Button className="w-20" action="destructive" emphasis="subtle">
            Subtle
          </Button>
          <Button className="w-20" action="destructive" emphasis="minimal">
            Minimal
          </Button>
        </div>
        <div className="row-span-1 flex justify-evenly">
          <Button className="w-20" action="destructive" disabled>
            Disabled
          </Button>
          <Button
            className="w-20"
            action="destructive"
            emphasis="subtle"
            disabled
          >
            Disabled
          </Button>
          <Button
            className="w-20"
            action="destructive"
            emphasis="minimal"
            disabled
          >
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
};

ButtonStates.storyName = 'Button States';

export const ButtonSizes = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <span>Extra Large</span>
        <Button size="xl">Extra Large</Button>
      </div>
      <div className="flex flex-col">
        <span>Large</span>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-col">
        <span>Medium</span>
        <Button size="md">Medium</Button>
      </div>
      <div className="flex flex-col">
        <span>Small</span>
        <Button size="sm">Small</Button>
      </div>
    </div>
  );
};

ButtonSizes.storyName = 'Button Sizes';

export const ButtonStatus = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <span>Loading</span>
        <Button className="w-20" status="loading"></Button>
      </div>
      <div className="flex flex-col">
        <span>Success</span>
        <Button className="w-20" status="success"></Button>
      </div>
      <div className="flex flex-col">
        <span>Error</span>
        <Button className="w-20" status="error"></Button>
      </div>
    </div>
  );
};

ButtonStatus.storyName = 'Button Status';
