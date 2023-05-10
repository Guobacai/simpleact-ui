import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';

export interface TabHeadProps {
  isSelected: boolean;
  disabled: boolean;
  title: string;
  icon: IconProp;
  onClickTab?: (event: MouseEvent<HTMLElement>) => void;
}

const baseClasses = 'flex gap-3 items-center whitespace-nowrap';

const TabHead = ({
  isSelected,
  title,
  icon,
  disabled = false,
  onClickTab,
}: TabHeadProps) => {
  const tabClasses = clsx(baseClasses, {
    'text-blue-600': !disabled && isSelected,
    'hover:text-blue-600': !disabled,
    'text-slate-600': disabled,
  });

  return (
    <div className={tabClasses} onClick={onClickTab}>
      {icon && <FontAwesomeIcon icon={icon} size="sm"></FontAwesomeIcon>}
      {title}
    </div>
  );
};

export default TabHead;
