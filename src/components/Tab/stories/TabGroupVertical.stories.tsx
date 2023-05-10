import React from 'react';
import { Meta } from '@storybook/react';
import TabGroupVertical from '../TabGroupVertical';

export default {
  title: 'Components/Tab',
} as Meta;

const tabs = [
  {
    id: '1',
    title: 'Tab Item 1',
    isSelected: false,
    body: (
      <div className="flex items-center justify-center w-full h-72 bg-slate-200">
        Tab Item 1
      </div>
    ),
  },
  {
    id: '2',
    title: 'Tab Item 2',
    isSelected: true,
    body: (
      <div className="flex items-center justify-center w-full h-72 bg-slate-200">
        Tab Item 2
      </div>
    ),
  },
  {
    id: '3',
    title: 'Tab Item 3',
    body: (
      <div className="flex items-center justify-center w-full h-72 bg-slate-200">
        Tab Item 3
      </div>
    ),
  },
  {
    id: '4',
    title: 'Tab Item 4',
    disabled: true,
    icon: 'bell',
    body: (
      <div className="flex items-center justify-center w-full h-72 bg-slate-200">
        Tab Item 4
      </div>
    ),
  },
];

export const VerticalTabGroup = () => {
  return (
    <div>
      <TabGroupVertical tabs={tabs}></TabGroupVertical>
    </div>
  );
};

VerticalTabGroup.storyName = 'Vertical Tab Group';
