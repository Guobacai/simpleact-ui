import React, { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button';
import clsx from 'clsx';

interface AccordinItemProps {
  title: string;
  leadingIcon: string;
  content?: ReactNode | string;
  size: 'medium' | 'small' | 'large';
  disabled?: boolean;
}

interface AccordinProps {
  items: AccordinItemProps[];
  typeStyle?: 'product' | 'market';
  emphasis?: 'bold' | 'subtle';
  multiple?: boolean;
}

const Accordion = ({
  items,
  typeStyle = 'product',
  emphasis = 'subtle',
  multiple = false,
}: AccordinProps) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Single: At any time, only one accordion can be expanded.
  // Multiple: It allows multiple accordion to be expanded at any time.
  const toggleItem = (index: number) => {
    if (multiple) {
      const expandedItemIndex = expandedItems.findIndex(
        (itemIndex) => itemIndex === index
      );

      if (expandedItemIndex > -1) {
        const prev = expandedItems.slice(0, expandedItemIndex);
        const post = expandedItems.slice(
          expandedItemIndex + 1,
          expandedItems.length
        );

        setExpandedItems([...prev, ...post]);
      } else {
        setExpandedItems([...expandedItems, index]);
      }
    } else {
      setExpandedItems(expandedItems[0] === index ? [] : [index]);
    }
  };

  const itemsDom = items.map(
    ({ title, content, leadingIcon, disabled = false }, index) => {
      const isExpanded = expandedItems.includes(index);
      const contentClasses = clsx(
        'border-b-2 transition-all duration-500 overflow-hidden',
        isExpanded ? 'max-h-52 ease-in' : 'max-h-0 ease-out'
      );

      const accordionHeadClasses = clsx(
        'flex justify-between px-3',
        {
          'py-3 border-slate-300': typeStyle === 'product',
          'py-5 border-slate-200 text-neutral-700': typeStyle === 'market',
          'border-t-2': index === 0,
        },
        emphasis === 'bold' &&
          (disabled
            ? 'bg-neutral-100 text-neutral-400'
            : isExpanded
            ? 'bg-slate-500 hover:bg-slate-600 text-neutral-50'
            : 'bg-slate-300 hover:bg-slate-400'),
        emphasis === 'subtle' &&
          (disabled ? 'text-neutral-400' : 'hover:bg-neutral-100')
      );

      const expandIcon =
        typeStyle === 'product'
          ? isExpanded
            ? 'chevron-up'
            : 'chevron-down'
          : isExpanded
          ? 'minus'
          : 'plus';

      return (
        <li key={index}>
          <div className={accordionHeadClasses}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={leadingIcon}></FontAwesomeIcon>
              <span>{title}</span>
            </div>
            <Button
              variant="icon"
              emphasis="minimal"
              action="secondary"
              icon={expandIcon}
              disabled={disabled}
              onClick={() => {
                toggleItem(index);
              }}
            ></Button>
          </div>
          <div className={contentClasses}>
            <div className="py-3 px-2">{content}</div>
          </div>
        </li>
      );
    }
  );

  return <ul className="w-full">{itemsDom}</ul>;
};

export default Accordion;
