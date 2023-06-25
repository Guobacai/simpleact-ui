import React, { ReactNode } from 'react';
import { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'basic' | 'icon' | 'leadingIcon' | 'trailingIcon';
  action?: 'primary' | 'secondary' | 'info' | 'contrast' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  emphasis?: 'bold' | 'subtle' | 'minimal';
  shape?: 'square' | 'circle';
  status?: 'enabled' | 'loading' | 'success' | 'error';
  icon?: IconProp;
  children?: ReactNode;
}

const baseStyles = 'px-2 py-1';

const sizeStyles = {
  sm: 'text-sm px-4',
  md: 'text-base py-1 px-5',
  lg: 'text-lg py-2 px-5',
  xl: 'text-xl py-3 px-7',
};

const variantStyles = {
  basic: '',
  icon: '',
  leadingIcon: 'flex gap-2 items-center',
  trailingIcon: 'flex gap-2 items-center',
};

const shapeStyles = {
  square: 'rounded',
  circle: 'rounded-full',
};

const typeStyles = {
  bold: {
    primary:
      'text-neutral-100 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 focus:outline-2 focus:outline-offset-2',
    secondary:
      'text-neutral-900 bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 focus:outline-2 focus:outline-offset-2',
    info: 'text-neutral-100 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 focus:outline-2 focus:outline-offset-2',
    contrast:
      'text-neutral-900 bg-white hover:bg-neutral-200 active:bg-neutral-300 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900',
    destructive:
      'text-neutral-100 bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-1 focus:outline-offset-2 focus:outline-blue-700',
  },
  subtle: {
    primary:
      'border border-solid border-blue-700 text-blue-700 hover:bg-blue-100 active:bg-blue-300 focus:outline-2 focus:outline-offset-2 focus:border-none focus:bg-blue-700 focus:text-neutral-100',
    secondary:
      'border border-neutral-200 text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200 focus:outline-1 focus:outline-offset-2 focus:border-none focus:bg-neutral-200',
    info: 'border border-neutral-900 text-neutral-900 bg-transparent hover:bg-neutral-200 active:bg-neutral-300 focus:outline-1 focus:outline-offset-2 focus:border-none focus:bg-neutral-900 focus:text-neutral-100',
    contrast:
      'border border-solid border-white text-white hover:bg-opacity-20 focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900 focus:bg-neutral-50 focus:text-neutral-900',
    destructive:
      'border border-red-600 text-red-600 bg-transparent hover:bg-red-100 active:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-blue-700 focus:border-none focus:bg-red-600 focus:text-neutral-100',
  },
  minimal: {
    primary:
      'text-blue-700 hover:bg-blue-200 active:bg-blue-300 focus:outline-2 focus:outline-offset-2 focus:border-none focus:bg-blue-700 focus:text-neutral-100',
    secondary:
      'hover:bg-neutral-100 active:bg-neutral-200 focus:outline-1 focus:outline-offset-2 focus:bg-neutral-200',
    info: 'hover:bg-neutral-200 active:bg-neutral-300 focus:outline-1 focus:outline-offset-2 focus:bg-neutral-900 focus:text-neutral-100',
    contrast:
      'text-white focus:outline-2 focus:outline-offset-2 focus:outline-neutral-900 focus:bg-neutral-50 focus:text-neutral-900 hover:bg-slate-600 active:bg-slate-400',
    destructive:
      'text-red-600 hover:bg-red-100 active:bg-red-200 focus:outline-1 focus:outline-offset-2 focus:outline-blue-700 focus:border-none focus:bg-red-600 focus:text-neutral-100',
  },
};

const disabledStyles = 'cursor-default pointer-events-none opacity-25';

const statusIconMapping: Record<string, IconName> = {
  loading: 'spinner',
  success: 'circle-check',
  error: 'exclamation',
};

const statusStyles = {
  enabled: '',
  loading: '',
  success: 'bg-green-700',
  error: 'bg-red-600',
};

export function Button({
  className,
  variant = 'basic',
  action = 'primary',
  size = 'sm',
  shape = 'square',
  disabled = false,
  emphasis = 'bold',
  icon,
  status = 'enabled',
  children,
  ...props
}: ButtonProps) {
  const buttonClass = disabled
    ? clsx(
        className,
        baseStyles,
        variantStyles[variant],
        shapeStyles[shape],
        sizeStyles[size],
        typeStyles[emphasis][action],
        disabledStyles
      )
    : clsx(
        className,
        baseStyles,
        variantStyles[variant],
        shapeStyles[shape],
        sizeStyles[size],
        statusStyles[status],
        typeStyles[emphasis][action]
      );

  const statusIconClass = clsx({ 'animate-spin': status === 'loading' });

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {variant == 'icon' ? (
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      ) : (
        <>
          {variant === 'leadingIcon' && (
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          )}
          {status == 'enabled' ? (
            children
          ) : (
            <FontAwesomeIcon
              className={statusIconClass}
              icon={['fas', statusIconMapping[status]]}
            ></FontAwesomeIcon>
          )}
          {variant === 'trailingIcon' && (
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          )}
        </>
      )}
    </button>
  );
}
