import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export interface TopNavigationItemProps {
  label: string;
  subItems?: TopNavigationItemProps[];
}

const TopNavigationDropdownItem = ({
  label,
  subItems = [],
}: TopNavigationItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const subItemsDom = subItems.map(
    ({ label }: TopNavigationItemProps, index: number) => (
      <div className="hover:cursor-pointer hover:text-blue-500" key={index}>
        {label}
      </div>
    )
  );

  // Click parent item should open the sub item list.
  const onClickParentItem = () => {
    setIsOpen(!isOpen);
  };

  const iconStyles = clsx('transition-all duration-500 transform', {
    'rotate-90': isOpen,
  });

  return (
    <div onClick={onClickParentItem}>
      <div className="flex justify-between items-center w-full hover:text-neutral-300 hover:cursor-pointer">
        <div>{label}</div>
        {subItems.length > 0 && (
          <div className={iconStyles}>
            <FontAwesomeIcon icon={faChevronRight} size="xs"></FontAwesomeIcon>
          </div>
        )}
      </div>
      {isOpen && subItems.length > 0 && (
        <div className="flex flex-col gap-3 py-5">{subItemsDom}</div>
      )}
    </div>
  );
};

export default TopNavigationDropdownItem;
