import React from 'react';
import { Meta } from '@storybook/react';
import { Card } from '../Card';
import { Button } from '../../Button';

export default {
  title: 'Components/Card',
  componentl: Card,
} as Meta;

export const ProductStory = () => {
  const buttons = <Button>Learn More</Button>;
  return (
    <div className="w-72 h-32">
      <Card title="Card Title" footer={buttons}>
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

ProductStory.storyName = 'Product Card';

export const MarketingStory = () => {
  return (
    <div className="w-72 h-32">
      <Card title="Card Title" renderStyle="marketing">
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

ProductStory.storyName = 'Marketing Card';

export const EditorialStory = () => {
  return (
    <div className="w-72 h-32">
      <Card title="Card Title" renderStyle="editorial">
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

EditorialStory.storyName = 'Editorial Card';

export const ProductHorizontalImageStory = () => {
  return (
    <div className="w-[400px] h-32">
      <Card title="Card Title" imageDirection="horizontal">
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

ProductHorizontalImageStory.storyName = 'Product Horizontal Image Card';

export const MarketingHorizontalImageStory = () => {
  return (
    <div className="w-[400px] h-32">
      <Card
        renderStyle="marketing"
        title="Card Title"
        imageDirection="horizontal"
      >
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

MarketingHorizontalImageStory.storyName = 'Marketing Horizontal Image Card';

export const EditorialHorizontalImageStory = () => {
  return (
    <div className="w-[400px] h-32">
      <Card
        renderStyle="editorial"
        title="Card Title"
        imageDirection="horizontal"
      >
        Despite a rebound in foot traffic, restaurants and other local shops are
        struggling to pay the bills.
      </Card>
    </div>
  );
};

EditorialHorizontalImageStory.storyName = 'Editorial Horizontal Image Card';
