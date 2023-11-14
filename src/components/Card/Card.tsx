import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProp {
  title: string;
  subTitle?: string;
  renderStyle?: 'product' | 'marketing' | 'editorial';
  children?: ReactNode;
  footer?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageDirection?: 'vertical' | 'horizontal';
  size?: 'lg' | 'md' | 'sm';
}

export const Card = ({
  children,
  title,
  subTitle,
  renderStyle = 'product',
  imageDirection = 'vertical',
  size = 'md',
  footer,
}: CardProp) => {
  const containerClasses = clsx('flex border shadow-md', {
    'flex-col': imageDirection === 'vertical',
  });

  const bodyClasses = clsx('basis-auto text-sm', {
    'text-slate-500': renderStyle === 'marketing',
    'text-sm': size === 'sm',
    'text-lg': size === 'lg',
    'text-md': size === 'md',
  });

  const headerTitleClasses = clsx('text-base', {
    'text-slate-700': renderStyle === 'marketing',
    'text-base': renderStyle !== 'editorial',
    'text-xl': renderStyle === 'editorial',
  });

  const headerSubtitleClasses = clsx('text-xs', {
    'text-slate-500': renderStyle === 'marketing',
  });

  const imageContainerClasses = clsx({});

  const contentContainerClasses = clsx('flex flex-col justify-between', {
    'p-2 gap-3': renderStyle === 'product',
    'p-6 gap-6': renderStyle === 'marketing',
    'p-8 gap-6': renderStyle === 'editorial',
  });

  return (
    <div className={containerClasses}>
      <div className={imageContainerClasses}>
        <img
          className="w-full h-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/LH_95.jpg/640px-LH_95.jpg"
          alt="Universe"
        />
      </div>
      <div className={contentContainerClasses}>
        <div className="basis-1">
          {subTitle !== '' && (
            <div className={headerSubtitleClasses}>{subTitle}</div>
          )}
          <div className={headerTitleClasses}>{title}</div>
        </div>
        <div className={bodyClasses}>{children}</div>
        <div className="basis-1">{footer}</div>
      </div>
    </div>
  );
};
