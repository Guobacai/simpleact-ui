import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';

interface ButtonGroupProps {
  buttons: ButtonProps[];
  orientation?: 'horizontal' | 'vertical';
  variations?: 'basic' | 'icon' | 'leadingIcon' | 'trailingIcon';
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

const ButtonGroup = ({
  buttons,
  variations = 'basic',
  orientation = 'horizontal',
  size = 'md',
}: ButtonGroupProps) => {
  const groupContainerClass = clsx(
    'flex gap-1',
    {
      'flex-col': orientation === 'vertical',
      'w-min': orientation === 'vertical',
    },
    sizes[size]
  );

  const buttonList = buttons.map(({ icon, children, action }, index) => {
    return (
      <Button key={index} icon={icon} variant={variations} action={action}>
        {children}
      </Button>
    );
  });
  return <div className={groupContainerClass}>{buttonList}</div>;
};

export default ButtonGroup;
