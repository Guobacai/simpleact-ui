import React, { useState } from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { isBoolean } from '../../shared/utils';
import clsx from 'clsx';

type TruncateItemsSetting = {
  before: number;
  after: number;
};

export interface BreadcrumbProp {
  id: string | number;
  title: string;
  disabled?: boolean;
  readonly?: boolean;
  visited?: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbProp[];
  truncateItems?: boolean | TruncateItemsSetting;
  truncateText?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const Breadcrumb = ({
  breadcrumbs,
  truncateItems = false,
  truncateText = 12,
  size = 'md',
}: BreadcrumbsProps) => {
  const breadcrumbsLen = breadcrumbs.length;

  // Formalize the number of the breadcrumb should be truncated.
  const initTruncateBreadcrumbs: TruncateItemsSetting = isBoolean(truncateItems)
    ? truncateItems
      ? { before: breadcrumbsLen - 1, after: 0 }
      : { before: breadcrumbsLen, after: -1 }
    : // The boolean value is already handled.
      (truncateItems as TruncateItemsSetting);

  const [truncatedBreadcrumbs, setTruncatedBreadcrumbs] =
    useState<TruncateItemsSetting>(initTruncateBreadcrumbs);

  if (truncatedBreadcrumbs.before <= truncatedBreadcrumbs.after) {
    throw new Error(
      'The before must be larger than after in the settings of truncate'
    );
  }

  const headItemsDom = breadcrumbs
    .slice(0, truncatedBreadcrumbs.after + 1) // The items displayed before ellipsis(...)
    .map(({ id, title, disabled, readonly, visited }: BreadcrumbProp) => (
      <BreadcrumbItem
        key={id}
        title={title}
        truncateTitleLength={truncateText}
        disabled={disabled}
        readonly={readonly}
        visited={visited}
      ></BreadcrumbItem>
    ));

  const onClickTruncatedEllipsis = () => {
    setTruncatedBreadcrumbs({ before: breadcrumbsLen, after: -1 });
  };

  // The items displayed after ellipsis(...).
  const tailItems = breadcrumbs.slice(
    -(breadcrumbsLen - truncatedBreadcrumbs.before)
  );

  const tailItemsDom = tailItems.map(
    ({ id, title, disabled, visited }, index) => (
      <BreadcrumbItem
        key={id}
        title={title}
        truncateTitleLength={truncateText}
        hideSeparator={index === tailItems.length - 1}
        disabled={disabled}
        readonly={index === tailItems.length - 1}
        visited={visited}
      ></BreadcrumbItem>
    )
  );

  const listStyles = clsx('flex flex-wrap', {
    'text-sm': size === 'sm',
    'text-base': size === 'md',
    'text-lg': size === 'lg',
  });

  return (
    <ul className={listStyles}>
      {headItemsDom}
      {truncatedBreadcrumbs.before - truncatedBreadcrumbs.after <
        breadcrumbsLen && (
        <BreadcrumbItem
          title="..."
          onClickBreadcumbItem={onClickTruncatedEllipsis}
        ></BreadcrumbItem>
      )}
      {tailItemsDom}
    </ul>
  );
};
