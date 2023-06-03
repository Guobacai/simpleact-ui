import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  useFloating,
  useHover,
  safePolygon,
  useInteractions,
  autoUpdate,
  offset,
  shift,
} from '@floating-ui/react';
import TopNavigationDropdownItem, {
  TopNavigationItemProps,
} from './TopNavigationDropdownItem';

const TopNavigationDropdown = ({
  items,
}: {
  items: TopNavigationItemProps[];
}) => {
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

  const itemsDom = items.map(
    ({ label, subItems }: TopNavigationItemProps, index: number) => (
      <TopNavigationDropdownItem
        key={index}
        label={label}
        subItems={subItems}
      ></TopNavigationDropdownItem>
    )
  );

  return (
    <>
      <FontAwesomeIcon
        className="hover:cursor-pointer hover:scale-125"
        icon={faBars}
        size="xl"
        ref={refs.setReference}
        {...getReferenceProps()}
      ></FontAwesomeIcon>
      {isOpen && (
        <div
          className="flex flex-col gap-3 text-black bg-neutral-100 p-5 rounded-md w-72"
          ref={refs.setFloating}
          style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
          {...getFloatingProps()}
        >
          {itemsDom}
        </div>
      )}
    </>
  );
};

export default TopNavigationDropdown;
