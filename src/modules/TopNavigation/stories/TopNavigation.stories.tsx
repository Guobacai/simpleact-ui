import React from 'react';
import { Meta } from '@storybook/react';
import TopNavigation from '../TopNavigation';

export default {
  title: 'Modules/TopNavigation',
  component: TopNavigation,
} as Meta;

const navItems = [
  {
    label: 'App 1',
    subItems: [
      { label: 'Sub App 1' },
      { label: 'Sub App 2' },
      { label: 'Sub App 3' },
    ],
  },
  { label: 'App 2', subItems: [{ label: 'App 2 Sub Item' }] },
  { label: 'A great prodcut that can fool everyone' },
];

export const TopNavigationStory = () => {
  return (
    <div>
      <TopNavigation items={navItems}></TopNavigation>
    </div>
  );
};

TopNavigationStory.storyName = 'Top Navigation';
