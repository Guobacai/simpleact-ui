import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  useFloating,
  useHover,
  safePolygon,
  useInteractions,
  autoUpdate,
  offset,
  shift,
} from '@floating-ui/react';
import clsx from 'clsx';

export interface TopNavigationItemProps {
  label: string;
  subItems?: TopNavigationItemProps[];
}

const TopNavigationHorizontalListItem = ({
  label,
  subItems = [],
}: TopNavigationItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(({ rects }) => ({
        mainAxis: 8,
        crossAxis: rects.floating.width / 2 - rects.reference.width / 2,
      })),
      shift(),
    ],
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const subItemsDom = subItems.map(({ label }, index) => (
    <div key={index} className="py-2 cursor-pointer hover:text-blue-500">
      {label}
    </div>
  ));

  const iconStyles = clsx('transition transform', {
    'translate-y-0.5': isOpen,
  });

  return (
    <>
      <div
        className="flex gap-1 items-center hover:text-neutral-300 hover:cursor-pointer"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {label}
        {!!subItems.length && (
          <div className={iconStyles}>
            <FontAwesomeIcon icon={faChevronDown} size="xs"></FontAwesomeIcon>
          </div>
        )}
      </div>
      {isOpen && !!subItems.length && (
        <div
          className="bg-neutral-100 text-black w-72 rounded-md p-5"
          ref={refs.setFloating}
          style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
          {...getFloatingProps}
        >
          {subItemsDom}
        </div>
      )}
    </>
  );
};

export default TopNavigationHorizontalListItem;
