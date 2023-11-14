import React from 'react';
import clsx from 'clsx';
import { Label } from '../Label/Label';

interface SwitchProp {
  label: string;
  active?: boolean;
  disabled?: boolean;
  error?: boolean;
  autoAligned?: boolean;
  orientation?: 'left' | 'right';
}

export const Switch = ({
  label,
  active = false,
  disabled = false,
  error = false,
  orientation = 'left',
  autoAligned = false,
}: SwitchProp) => {
  const controlClasses = clsx(
    'absolute top-0 left-0 h-4 w-4 rounded-full duration-300',
    disabled
      ? 'bg-neutral-300'
      : active
      ? error
        ? 'bg-red-500'
        : 'bg-blue-500'
      : 'bg-neutral-500',
    {
      'translate-x-4': !disabled && active,
    }
  );

  const barClasses = clsx(
    'w-8 h-1 rounded',
    disabled
      ? 'bg-neutral-100'
      : active
      ? error
        ? 'bg-red-300'
        : 'bg-blue-300'
      : 'bg-neutral-300'
  );

  const containerClasses = clsx('flex gap-3 items-center', {
    'justify-between': autoAligned,
  });

  const labelClasses = clsx({
    'order-first': orientation === 'left',
    'order-last': orientation === 'right',
  });

  return (
    <div className={containerClasses}>
      <div className={labelClasses}>
        <Label>{label}</Label>
      </div>
      <div className="relative flex items-center h-4">
        <div className={barClasses}></div>
        <div className={controlClasses}></div>
      </div>
    </div>
  );
};
