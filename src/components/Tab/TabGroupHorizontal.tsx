import React, {
  ReactNode,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import clsx from 'clsx';
import TabHead, { TabHeadProps } from './TabHead';

interface TabProps extends TabHeadProps {
  body: ReactNode;
}

export interface TabGroupHorizontalProps {
  tabs: TabProps[];
  alignment: 'left' | 'center' | 'right';
  onClickTab: (event: MouseEvent<HTMLDivElement>) => void;
}

const baseHeaderClass = 'flex flex-row gap-8';

const TabGroupHorizontal = ({
  tabs,
  alignment = 'left',
  onClickTab,
}: TabGroupHorizontalProps) => {
  // When the width of the tab group is shrunk, the overflow tab will be hidden
  // in the "foldedTabs".
  // Folded tabs will be displayed the dropdown list button.
  const [displayedTabs, setDisplayedTabs] = useState(tabs);
  const [foldedTabs, setFoldedTabs] = useState<TabProps[]>([]);

  const tabContainerElement = useRef<HTMLDivElement>(null);
  const headerContainerElement = useRef<HTMLDivElement>(null);

  // Saves the width of tabs in order to calculate whether the items can be fit
  // into the width of the container.
  const tabItemsWidth: number[] = [];
  const tabHeadGap = 32;

  const tabHeaderClass = clsx(baseHeaderClass, {
    'justify-center': alignment === 'center',
    'justify-end': alignment === 'right',
  });

  const tabsDom = displayedTabs.map((tab, index) => {
    const tabContainerClass = clsx('flex border-b-2 border-transparent', {
      '!border-blue-600': !tab.disabled && tab.isSelected,
      'hover:border-blue-600': !tab.disabled,
    });

    return (
      <div className={tabContainerClass} key={index}>
        <TabHead {...tab} onClickTab={onClickTab}></TabHead>
      </div>
    );
  });

  const selectedTab = tabs.find(({ isSelected }) => isSelected);

  const tabBody = selectedTab ? selectedTab.body : tabs[0].body;

  // Observe the resizing of the width of the tab group.
  // Calculate how many tab can be fit into.
  // Put overflowed tab into the dropdown list button.
  const resizeObserver = new ResizeObserver(() => {
    if (tabContainerElement.current) {
      const { clientWidth }: HTMLDivElement = tabContainerElement.current;
      // The first tab that should be folded into the dropdown list button.
      let foldedIndex = 0;
      let width = 0;

      for (const itemWidth of tabItemsWidth) {
        if (width + itemWidth + tabHeadGap < clientWidth) {
          width += itemWidth + tabHeadGap;
          foldedIndex++;
        } else {
          break;
        }
      }

      setDisplayedTabs(tabs.slice(0, foldedIndex));
      setFoldedTabs(tabs.slice(foldedIndex, tabItemsWidth.length));
    }
  });

  // Same as componentDidMount()
  useEffect(() => {
    if (headerContainerElement.current) {
      const { childNodes } = headerContainerElement.current;

      for (const childNode of childNodes.entries()) {
        const secondChildNode = childNode[1] as Element;
        tabItemsWidth.push(secondChildNode.clientWidth);
      }

      if (tabContainerElement.current) {
        resizeObserver.observe(tabContainerElement.current);
      }
    }

    // When the component is unmounted, this distructor will be called
    // to remove the resize observer
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full" ref={tabContainerElement}>
      <div className={tabHeaderClass} ref={headerContainerElement}>
        {tabsDom}
      </div>
      <div className="flex-auto">{tabBody}</div>
    </div>
  );
};

export default TabGroupHorizontal;
