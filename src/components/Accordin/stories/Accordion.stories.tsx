import React from 'react';
import { Meta } from '@storybook/react';
import Accordion from '../Accordion';
import { Button } from '../../Button';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const accordions = [
  {
    title: 'Category 1',
    leadingIcon: 'user',
    content:
      'The National Basketball Association is a professional basketball league in North America composed of 30 teams. It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world. ',
  },
  {
    title: 'Category 2',
    leadingIcon: 'house',
    content: (
      <div>
        The National Basketball Association is a professional basketball league
        in North America composed of 30 teams.
      </div>
    ),
  },
  {
    title: 'Category 3',
    leadingIcon: 'download',
    content: <Button>Click Me</Button>,
  },
  {
    title: 'Category 4',
    leadingIcon: 'bars',
    content:
      'The National Basketball Association is a professional basketball league in North America composed of 30 teams. It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world. ',
  },
  {
    title: 'Category 5',
    leadingIcon: 'face-smile',
    disabled: true,
    content:
      'The National Basketball Association is a professional basketball league in North America composed of 30 teams. It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world. ',
  },
];

export const SingleProductAccordionStory = () => {
  return (
    <div className="w-96">
      <Accordion items={accordions}></Accordion>
    </div>
  );
};

SingleProductAccordionStory.storyName = 'Accordion Product - Single';

export const MultipleProductAccordionStory = () => {
  return (
    <div className="w-96">
      <Accordion items={accordions} multiple></Accordion>
    </div>
  );
};

MultipleProductAccordionStory.storyName = 'Accordion Product - Multiple';

export const MarketAccordionStory = () => {
  return (
    <div className="w-96">
      <Accordion items={accordions} typeStyle="market"></Accordion>
    </div>
  );
};

MarketAccordionStory.storyName = 'Accordion Market';

export const BoldProductAccordionStory = () => {
  return (
    <div className="w-96">
      <Accordion items={accordions} emphasis="bold"></Accordion>
    </div>
  );
};

BoldProductAccordionStory.storyName = 'Accordion Bold';
