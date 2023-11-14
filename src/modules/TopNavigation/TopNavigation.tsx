import React from 'react';
import TopNavigationDropdown from './TopNavigationDropdown';
import TopNavigationHorizontalList from './TopNavigationHorizontalList';

interface TopNavigationProps {
  items: TopNavigationItemProps[];
  logo?: string;
  logoAlt?: string;
}

export const TopNavigation = ({ items, logo, logoAlt }: TopNavigationProps) => {
  return (
    <div className="flex sm:max-xl:justify-between h-full px-3 bg-blue-400 text-white">
      <div className="flex items-center sm:max-xl:order-2 xl:order-1">
        {logo && <img src={logo} alt={logoAlt}></img>}
      </div>
      <div className="xl:grow sm:max-xl:order-1 xl:order-2">
        <div className="h-full py-5 items-center hidden xl:flex">
          <TopNavigationHorizontalList
            items={items}
          ></TopNavigationHorizontalList>
        </div>
        <div className="h-full py-5 items-center hidden sm:max-xl:flex">
          <TopNavigationDropdown items={items}></TopNavigationDropdown>
        </div>
      </div>
      <div className="flex items-center sm:max-xl:order-3 xl:order-3"></div>
    </div>
  );
};
