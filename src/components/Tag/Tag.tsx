import React, { ReactNode, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface TagProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'display' | 'toggle';
  variation?: 'bold' | 'subtle' | 'minimal' | 'minimalOutline';
  color?:
    | 'gray'
    | 'blue'
    | 'red'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'lime'
    | 'teal'
    | 'turquoise'
    | 'aqua'
    | 'ultramarine'
    | 'purple'
    | 'pink';
  size?: 'extrasm' | 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  selected?: boolean;
  checked?: boolean;
  tabIndex?: number;
  onSelect?: (event: MouseEvent<HTMLElement>) => void;
  onRemove?: (event: MouseEvent<SVGSVGElement>) => void;
}

const sizeClasses = {
  extrasm: 'text-xs px-4',
  sm: 'text-sm px-4',
  md: 'text-base px-4 py-1',
  lg: 'text-lg px-5 py-2',
};

const tagColors = {
  gray: {
    bold: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-neutral-50 focus:outline-gray-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    minimal: 'border-slate-500 text-gray-700',
    minimalOutline: 'bg-gray-100 border-gray-500 text-gray-700',
  },
  blue: {
    bold: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-neutral-50 focus:outline-blue-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
    minimal: 'border-slate-500 text-blue-700',
    minimalOutline: 'bg-blue-100 border-blue-500 text-blue-700',
  },
  red: {
    bold: 'bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-red-600 focus:outline-1 focus:outline-offset-2 text-neutral-50',
    subtle: 'bg-red-100 hover:bg-red-200 text-red-600',
    minimal: 'border-slate-500 text-red-600',
    minimalOutline: 'bg-red-200 border-red-500 text-red-700',
  },
  green: {
    bold: 'bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-green-600 focus:outline-1 focus:outline-offset-2 text-neutral-50',
    subtle: 'bg-green-100 hover:bg-green-200 text-green-700',
    minimal: 'border-slate-500 text-green-700',
    minimalOutline: 'bg-green-100 border-green-500 text-green-700',
  },
  yellow: {
    bold: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-neutral-950 focus:outline-yellow-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-yellow-100 hover:bg-yellow-200 text-neutral-950',
    minimal: 'border-slate-500 text-neutral-950',
    minimalOutline: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  },
  orange: {
    bold: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-neutral-50 focus:outline-orange-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-orange-100 hover:bg-orange-200 text-orange-500',
    minimal: 'border-slate-500 text-orange-700',
    minimalOutline: 'bg-orange-100 border-orange-500 text-orange-700',
  },
  lime: {
    bold: 'bg-lime-500 hover:bg-lime-600 active:bg-lime-700 text-neutral-50 focus:outline-lime-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-lime-100 hover:bg-lime-200 text-lime-700',
    minimal: 'border-slate-500 text-lime-700',
    minimalOutline: 'bg-lime-100 border-lime-500 text-lime-700',
  },
  teal: {
    bold: 'bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-neutral-50 focus:outline-teal-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-teal-100 hover:bg-teal-200 text-teal-600',
    minimal: 'border-slate-500 text-teal-600',
    minimalOutline: 'bg-teal-100 border-teal-500 text-teal-700',
  },
  turquoise: {
    bold: 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-neutral-50 focus:outline-teal-700 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-teal-100 hover:bg-teal-200 text-teal-700',
    minimal: 'border-slate-500 text-teal-700',
    minimalOutline: 'bg-teal-200 border-teal-600 text-teal-700',
  },
  aqua: {
    bold: 'bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-neutral-50 focus:outline-sky-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-sky-100 hover:bg-sky-200 text-sky-700',
    minimal: 'border-slate-500 text-sky-700',
    minimalOutline: 'bg-sky-100 border-sky-500 text-sky-700',
  },
  ultramarine: {
    bold: 'bg-indigo-500 hover:bg-indigo-600 active:bg-sky-700 text-neutral-50 focus:outline-indigo-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
    minimal: 'border-slate-500 text-indigo-700',
    minimalOutline: 'bg-indigo-100 border-indigo-500 text-indigo-700',
  },
  purple: {
    bold: 'bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-neutral-50 focus:outline-purple-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
    minimal: 'border-slate-500 text-purple-700',
    minimalOutline: 'bg-purple-100 border-purple-500 text-purple-700',
  },
  pink: {
    bold: 'bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-neutral-50 focus:outline-pink-600 focus:outline-1 focus:outline-offset-2',
    subtle: 'bg-pink-100 hover:bg-pink-200 text-pink-700',
    minimal: 'border-slate-500 text-pink-700',
    minimalOutline: 'bg-pink-100 border-pink-500 text-pink-700',
  },
};

const baseClass = 'inline-flex gap-2 border rounded-full items-center';

const toggleTagBaseClass = 'bg-neutral-200 text-neutral-600';

export const Tag = ({
  children,
  className,
  type = 'display',
  disabled = false,
  color = 'gray',
  variation = 'bold',
  dismissible = false,
  size = 'md',
  selected = false,
  checked = false,
  tabIndex,
  onSelect,
  onRemove,
}: TagProps) => {
  const tagColorClass =
    type === 'display'
      ? clsx(
          baseClass,
          className,
          tagColors[color][variation],
          sizeClasses[size]
        )
      : clsx(
          baseClass,
          className,
          selected ? tagColors[color][variation] : toggleTagBaseClass,
          sizeClasses[size]
        );

  const tagClass = disabled
    ? clsx(baseClass, sizeClasses[size], 'bg-slate-300 text-slate-400')
    : tagColorClass;

  return (
    <div className={tagClass} onClick={onSelect} tabIndex={tabIndex}>
      {type === 'toggle' && checked && selected && (
        <FontAwesomeIcon icon="check"></FontAwesomeIcon>
      )}
      <span>{children}</span>
      {dismissible && (
        <FontAwesomeIcon icon="xmark" onClick={onRemove}></FontAwesomeIcon>
      )}
    </div>
  );
};
