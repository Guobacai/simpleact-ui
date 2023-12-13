import React, { ReactNode, useState } from 'react';
import { Label } from '../Label/Label';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleNotch,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { noop } from '../../shared/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  orientation?: 'horizontal' | 'vertical';
  leadingContent?: ReactNode;
  iconPosition?: 'leading' | 'tailing';
  icon?: IconDefinition;
  supportiveText?: string;
  value?: string;
  disabled?: boolean;
  status?: 'success' | 'warning' | 'error' | 'loading';
  readonly?: boolean;
  clearable?: boolean;
  handleClickClearBtn?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  handleClickTailingIcon?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const statusIconMapping = {
  success: faCircleCheck,
  warning: faTriangleExclamation,
  error: faCircleExclamation,
  loading: faCircleNotch,
};

export const Input = ({
  type,
  label,
  orientation = 'horizontal',
  placeholder,
  leadingContent,
  icon,
  iconPosition,
  supportiveText,
  onChange,
  value,
  disabled,
  status,
  readonly = false,
  clearable = false,
  handleClickClearBtn = noop,
  handleClickTailingIcon = noop,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const isClearable = clearable && value !== '';

  let tailingIcon;
  const leadingIcon = iconPosition === 'leading' && icon;

  if (status) {
    // If the status is set, always show the status tailing icon.
    tailingIcon = statusIconMapping[status];
  } else if (!!icon && iconPosition === 'tailing') {
    // If icon & iconPosition is set, then always use the designated icon.
    tailingIcon = icon;
  }

  const containerClasses = clsx('flex gap-2', [
    orientation === 'vertical' ? 'flex-col' : 'items-center',
  ]);

  const controllerClasses = clsx('flex basis-2/3 items-center', {
    border: !readonly,
    'border-blue-500': !readonly && isFocus,
    'border-neutral-400': !isFocus && !!value,
    'hover:border-neutral-600': !readonly && !disabled && !isFocus,
    '!border-green-600': !readonly && !disabled && status === 'success',
    '!border-yellow-700': !readonly && !disabled && status === 'warning',
    '!border-red-700': !readonly && !disabled && status === 'error',
    '!border-neutral-200': disabled,
  });

  const labelClasses = clsx(
    'basis-1/3 whitespace-nowrap overflow-x-hidden text-ellipsis',
    {
      'text-neutral-200': disabled,
    }
  );

  const inputClasses = clsx('flex-auto outline-0 px-2 py-1', {
    'text-neutral-300': disabled,
    'border-0': readonly,
    'bg-transparent': readonly,
  });

  const supportiveTextClasses = clsx('text-xs', {
    'text-green-600': status === 'success',
    'text-yellow-700': status === 'warning',
    'text-red-700': status === 'error',
  });

  const tailingIconContainerClasses = clsx(
    'flex self-stretch items-center px-2 bg-white hover:cursor-pointer',
    {
      'text-green-600': status === 'success',
      'text-yellow-700': status === 'warning',
      'text-red-700': status === 'error',
      'text-blue-700': status === 'loading',
    }
  );

  const leadingIconContainerClasses = clsx(
    'flex self-stretch items-center px-2 bg-white'
  );

  const trailingIconClasses = clsx({
    'animate-spin': status === 'loading',
  });

  return (
    <div className={containerClasses}>
      {label && (
        <div className={labelClasses}>
          <Label>{label}</Label>
        </div>
      )}
      <div className={controllerClasses}>
        {leadingContent && (
          <div className="flex whitespace-nowrap px-2">{leadingContent}</div>
        )}
        {leadingIcon && (
          <div className={leadingIconContainerClasses}>
            <FontAwesomeIcon className="" icon={leadingIcon}></FontAwesomeIcon>
          </div>
        )}
        <input
          type={type}
          className={inputClasses}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          onChange={onChange}
          value={value}
          placeholder={!readonly ? placeholder : ''}
          disabled={disabled}
          readOnly={readonly}
        />
        {isClearable && (
          <div
            className="bg-white px-2 hover:cursor-pointer"
            onClick={handleClickClearBtn}
          >
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </div>
        )}
        {tailingIcon && (
          <div
            className={tailingIconContainerClasses}
            onClick={handleClickTailingIcon}
          >
            <FontAwesomeIcon
              className={trailingIconClasses}
              icon={tailingIcon}
            ></FontAwesomeIcon>
          </div>
        )}
      </div>
      {supportiveText && (
        <div className={supportiveTextClasses}>{supportiveText}</div>
      )}
    </div>
  );
};
