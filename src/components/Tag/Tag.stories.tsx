import React from 'react';
import { Meta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

export const TagColorsStory = () => {
  return (
    <div className="grid grid-rows-12 gap-5">
      <div className="flex gap-9 justify-center">
        <Tag dismissible>Gray</Tag>
        <Tag variation="subtle" dismissible>
          Gray
        </Tag>
        <Tag variation="minimal" dismissible>
          Gray
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="blue" dismissible>
          Blue
        </Tag>
        <Tag variation="subtle" color="blue" dismissible>
          Blue
        </Tag>
        <Tag variation="minimal" color="blue" dismissible>
          Blue
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="red" dismissible>
          Red
        </Tag>
        <Tag variation="subtle" color="red" dismissible>
          Red
        </Tag>
        <Tag variation="minimal" color="red" dismissible>
          Red
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="green" dismissible>
          Green
        </Tag>
        <Tag variation="subtle" color="green" dismissible>
          Green
        </Tag>
        <Tag variation="minimal" color="green" dismissible>
          Green
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="yellow" dismissible>
          Yellow
        </Tag>
        <Tag variation="subtle" color="yellow" dismissible>
          Yellow
        </Tag>
        <Tag variation="minimal" color="yellow" dismissible>
          Yellow
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="orange" dismissible>
          Orange
        </Tag>
        <Tag variation="subtle" color="orange" dismissible>
          Orange
        </Tag>
        <Tag variation="minimal" color="orange" dismissible>
          Orange
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="lime" dismissible>
          Lime
        </Tag>
        <Tag variation="subtle" color="lime" dismissible>
          Lime
        </Tag>
        <Tag variation="minimal" color="lime" dismissible>
          Lime
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="teal" dismissible>
          Teal
        </Tag>
        <Tag variation="subtle" color="teal" dismissible>
          Teal
        </Tag>
        <Tag variation="minimal" color="teal" dismissible>
          Teal
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="turquoise" dismissible>
          Turquoise
        </Tag>
        <Tag variation="subtle" color="turquoise" dismissible>
          Turquoise
        </Tag>
        <Tag variation="minimal" color="turquoise" dismissible>
          Turquoise
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="aqua" dismissible>
          Aqua
        </Tag>
        <Tag variation="subtle" color="aqua" dismissible>
          Aqua
        </Tag>
        <Tag variation="minimal" color="aqua" dismissible>
          Aqua
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="ultramarine" dismissible>
          Ultramarine
        </Tag>
        <Tag variation="subtle" color="ultramarine" dismissible>
          Ultramarine
        </Tag>
        <Tag variation="minimal" color="ultramarine" dismissible>
          Ultramarine
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="purple" dismissible>
          Purple
        </Tag>
        <Tag variation="subtle" color="purple" dismissible>
          Purple
        </Tag>
        <Tag variation="minimal" color="purple" dismissible>
          Purple
        </Tag>
      </div>
      <div className="flex gap-9 justify-center">
        <Tag color="pink" dismissible>
          Pink
        </Tag>
        <Tag variation="subtle" color="pink" dismissible>
          Pink
        </Tag>
        <Tag variation="minimal" color="pink" dismissible>
          Pink
        </Tag>
      </div>
    </div>
  );
};

TagColorsStory.storyName = 'Tag Colors';

export const ToggleTagStory = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col gap-5">
        <div>Bold</div>
        <div className="flex gap-5">
          <Tag type="toggle" color="gray">
            Enabled
          </Tag>
          <Tag type="toggle" color="gray" selected tabIndex={0}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="blue">
            Enabled
          </Tag>
          <Tag type="toggle" color="blue" selected tabIndex={1}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="red">
            Enabled
          </Tag>
          <Tag type="toggle" color="red" selected tabIndex={2}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="green">
            Enabled
          </Tag>
          <Tag type="toggle" color="green" selected tabIndex={3}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="yellow">
            Enabled
          </Tag>
          <Tag type="toggle" color="yellow" selected tabIndex={4}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="orange">
            Enabled
          </Tag>
          <Tag type="toggle" color="orange" selected tabIndex={5}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="lime">
            Enabled
          </Tag>
          <Tag type="toggle" color="lime" selected tabIndex={6}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="teal">
            Enabled
          </Tag>
          <Tag type="toggle" color="teal" selected tabIndex={7}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="turquoise">
            Enabled
          </Tag>
          <Tag type="toggle" color="turquoise" selected tabIndex={8}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="aqua">
            Enabled
          </Tag>
          <Tag type="toggle" color="aqua" selected tabIndex={9}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="purple">
            Enabled
          </Tag>
          <Tag type="toggle" color="purple" selected tabIndex={10}>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="pink">
            Enabled
          </Tag>
          <Tag type="toggle" color="pink" selected tabIndex={11}>
            Selected
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>Subtle</div>
        <div className="flex gap-5">
          <Tag type="toggle" color="gray" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="gray" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="blue" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="blue" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="red" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="red" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="green" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="green" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="yellow" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="yellow" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="orange" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="orange" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="lime" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="lime" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="teal" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="teal" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="turquoise" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag
            type="toggle"
            color="turquoise"
            selected
            variation="subtle"
            checked
          >
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="aqua" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="aqua" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="purple" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="purple" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="pink" variation="subtle" checked>
            Enabled
          </Tag>
          <Tag type="toggle" color="pink" selected variation="subtle" checked>
            Selected
          </Tag>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>Minimal</div>
        <div className="flex gap-5">
          <Tag type="toggle" color="gray" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="gray" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="blue" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="blue" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="red" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="red" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="green" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="green" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="yellow" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="yellow" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="orange" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="orange" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="lime" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="lime" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="teal" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="teal" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="turquoise" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag
            type="toggle"
            color="turquoise"
            selected
            variation="minimalOutline"
          >
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="aqua" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="aqua" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="purple" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="purple" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
        <div className="flex gap-5">
          <Tag type="toggle" color="pink" variation="minimalOutline">
            Enabled
          </Tag>
          <Tag type="toggle" color="pink" selected variation="minimalOutline">
            Selected
          </Tag>
        </div>
      </div>
    </div>
  );
};

ToggleTagStory.storyName = 'Toggle Tag';

export const DisabledTagStory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Display Tag</h2>
        <Tag color="blue" disabled>
          Disabled
        </Tag>
        <Tag color="blue" disabled>
          Disabled
        </Tag>
      </div>
      <div>
        <h2>Toggle Tag</h2>
        <Tag type="toggle" color="blue" disabled>
          Selected + Disabled
        </Tag>
        <Tag type="toggle" color="blue" disabled>
          Disabled + Active
        </Tag>
      </div>
    </div>
  );
};

DisabledTagStory.storyName = 'Disabled Tag';

export const TagSizeStory = () => {
  return (
    <div>
      <div>
        <Tag variation="subtle" color="blue" size="lg" dismissible>
          Large Tag
        </Tag>
        <Tag variation="subtle" color="blue" size="md" dismissible>
          Medium Tag
        </Tag>
        <Tag variation="subtle" color="blue" size="sm" dismissible>
          Small Tag
        </Tag>
        <Tag variation="subtle" color="blue" size="extrasm" dismissible>
          Extra Small Tag
        </Tag>
      </div>
    </div>
  );
};

TagSizeStory.storyName = 'Tag Sizes';
