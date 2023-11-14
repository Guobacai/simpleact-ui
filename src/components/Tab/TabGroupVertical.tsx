import React, { ReactNode } from 'react';
import clsx from 'clsx';
import TabHead, { TabHeadProps } from './TabHead';

const tabContainerBaseClasses = 'flex pl-3 flex-1 border-l-2';

interface TabProps extends TabHeadProps {
  body: ReactNode;
}

export interface TabGroupVerticalProps {
  tabs: [TabProps];
}

export const TabGroupVertical = ({ tabs }: TabGroupVerticalProps) => {
  const tabsHead = tabs.map((tab, index) => {
    const tabContainerClass = clsx(tabContainerBaseClasses, {
      'border-slate-200': !tab.isSelected,
      '!border-blue-600': !tab.disabled && tab.isSelected,
      'hover:border-blue-600': !tab.disabled,
    });

    return (
      <div className={tabContainerClass} key={index}>
        <TabHead {...tab}></TabHead>
      </div>
    );
  });

  const selectedTab = tabs.find(({ isSelected }) => isSelected);
  const tabBody = selectedTab ? selectedTab.body : tabs[0].body;

  return (
    <div className="flex flex-row h-full w-full gay-3">
      <div className="flex flex-col">
        <>
          {tabsHead}
          <div className="flex flex-auto border-l-2 border-slate-200"></div>
        </>
      </div>
      <div className="flex-auto">{tabBody}</div>
    </div>
  );
};
