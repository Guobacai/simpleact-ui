import React from 'react';
import clsx from 'clsx';

interface AvatarProp {
  children: React.Node;
  size: 'sm' | 'md' | 'lg' | 'xl';
  shape: 'circle' | 'square';
  emphasis: 'subtle' | 'bold';
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
  status?: undefined | 'warning' | 'error' | 'success' | 'info';
}

const sizes = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-10 h-10 text-basic',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-24 h-24 text-xxl',
};

const colors = {
  bold: {
    gray: 'bg-slate-500 text-slate-100',
    red: 'bg-red-500 text-slate-100',
    orange: 'bg-orange-500 text-slate-100',
    yellow: 'bg-yellow-400 text-slate-700',
    lime: 'bg-lime-600 text-slate-100',
    green: 'bg-green-700 text-slate-100',
    teal: 'bg-teal-700 text-slate-100',
    turquoise: 'bg-teal-800 text-slate-100',
    aqua: 'bg-sky-600 text-slate-100',
    blue: 'bg-blue-600 text-slate-100',
    ultramarine: 'bg-indigo-600 text-slate-100',
    purple: 'bg-purple-500 text-slate-100',
    pink: 'bg-pink-500 text-slate-100',
  },
  subtle: {
    gray: 'bg-slate-100 text-slate-700',
    red: 'bg-red-100 text-red-700',
    orange: 'bg-orange-100 text-orange-700',
    yellow: 'bg-yellow-100 text-slate-700',
    lime: 'bg-lime-200 text-slate-700',
    green: 'bg-green-100 text-green-700',
    teal: 'bg-teal-100 text-teal-700',
    turquoise: 'bg-teal-100 text-teal-800',
    aqua: 'bg-sky-100 text-sky-700',
    blue: 'bg-blue-100 text-blue-700',
    ultramarine: 'bg-indigo-100 text-indigo-700',
    purple: 'bg-purple-100 text-purple-700',
    pink: 'bg-pink-100 text-pink-700',
  },
};

const statusMapping = {
  warning: 'yellow',
  error: 'red',
  success: 'green',
  info: 'blue',
};

const Avatar = ({
  children,
  size = 'md',
  shape = 'circle',
  emphasis = 'bold',
  color = 'gray',
  status,
}: AvatarProp) => {
  const bgColor = status ? statusMapping[status] : color;
  const containerClasses = clsx(
    'flex items-center justify-center',
    sizes[size],
    colors[emphasis][bgColor],
    {
      'rounded-full': shape === 'circle',
    }
  );
  return <div className={containerClasses}>{children}</div>;
};

export default Avatar;
