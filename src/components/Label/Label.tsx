import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface LabelProp {
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Label = ({ disabled, size = 'md', children }: LabelProp) => {
  const labelClasses = clsx('', {
    'text-neutral-300': disabled,
    'text-sm': size === 'sm',
    'text-md': size === 'md',
    'text-lg': size === 'lg',
  });

  return <label className={labelClasses}>{children}</label>;
};
