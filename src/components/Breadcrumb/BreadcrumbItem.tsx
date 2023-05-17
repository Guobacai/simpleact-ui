import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BreadcrumbItemProps {
  title: string;
  id?: string | number;
  className?: string;
  readonly?: boolean;
  disabled?: boolean;
  visited?: boolean;
  hideSeparator?: boolean;
  truncateTitleLength?: number;
  onClickBreadcumbItem?: () => void;
}

const BreadcrumbItem = ({
  className,
  readonly = false,
  disabled = false,
  visited = false,
  hideSeparator = false,
  title,
  truncateTitleLength = title.length,
  onClickBreadcumbItem,
}: BreadcrumbItemProps) => {
  const breadcrumbItemStateStyles = clsx({
    'text-primary hover:text-blue-800 active:text-blue-900 cursor-pointer':
      !disabled && !readonly && !visited,
    'text-purple-600 cursor-pointer': !disabled && !readonly && visited,
    'text-purple-600 cursor-default': !disabled && readonly && visited,
    'text-slate-400 cursor-default': disabled,
  });

  const shouldTruncate =
    truncateTitleLength > 0 && truncateTitleLength < title.length;

  // TODO: Truncate based in fixed size. It is better to truncate
  // according to the space.
  const formattedTitle = shouldTruncate
    ? `${title.substring(0, truncateTitleLength)}...`
    : title;

  return (
    <li className={className}>
      <span
        className={breadcrumbItemStateStyles}
        onClick={onClickBreadcumbItem}
      >
        {formattedTitle}
      </span>
      {!hideSeparator && (
        <FontAwesomeIcon
          className="mx-3"
          icon="chevron-right"
          size="2xs"
        ></FontAwesomeIcon>
      )}
    </li>
  );
};

export default BreadcrumbItem;
