import React from 'react';
import TopNavigationHorizontalListItem, {
  TopNavigationItemProps,
} from './TopNavigationHorizontalListItem';

const TopNavigationHorizontalList = ({
  items,
}: {
  items: TopNavigationItemProps[];
}) => {
  const itemsDom = items.map(
    ({ label, subItems }: TopNavigationItemProps, index: number) => (
      <TopNavigationHorizontalListItem
        key={index}
        label={label}
        subItems={subItems}
      ></TopNavigationHorizontalListItem>
    )
  );

  return <div className="flex gap-5">{itemsDom}</div>;
};

export default TopNavigationHorizontalList;
