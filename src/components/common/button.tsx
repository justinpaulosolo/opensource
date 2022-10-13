import clsx from 'clsx';
import React from 'react';
import { Spinner } from './Spinner';

export type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const BUTTON_CLASSES =
  'inline-flex items-center border font-medium relative';

export type ButtonVariant =
  | 'primary'
  | 'primary-inverted'
  | 'secondary'
  | 'secondary-inverted'
  | 'danger'
  | 'danger-inverted';

type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

type ButtonStyle = {
  disabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export type ButtonProps = {
  loading?: boolean;
} & ButtonStyle;

export const BUTTON_SIZES = {
  xs: 'text-xs px-2.5 py-1.5 rounded',
  sm: 'text-sm px-3 py-2 leading-4 rounded',
  base: 'text-sm px-4 py-2 rounded',
  lg: 'text-base px-4 py-2 rounded-md',
  xl: 'text-base px-6 py-3 rounded-md',
  '2xl': 'text-lg px-8 py-3 md:py-4 md:text-xl md:px-10 rounded-lg',
};

export const BUTTON_VARIANT = {
  primary:
    'text-white border-primary-800 bg-primary-700 hover:bg-primary-800 shadow',
  'primary-inverted':
    'text-gray-500 border-gray-200 bg-white hover:text-gray-600 hover:border-gray-300 shadow',
  secondary:
    'text-gray-300 border-gray-700 bg-gray-800 hover:bg-gray-700 hover:border-gray-600 shadow',
  'secondary-inverted':
    'text-blue-500 border-blue-200 bg-white hover:text-white hover:bg-blue-500 shadow',
  danger:
    'text-white border-red-500 bg-red-500 hover:bg-white hover:text-red-500 shadow',
  'danger-inverted':
    'text-red-500 border-red-200 bg-white hover:text-white hover:bg-red-500 shadow',
};

export const getButtonClasses = (
  style: ButtonStyle = {},
  ...rest: string[]
) => {
  const { disabled, size = 'base', variant = 'primary' } = style;
  return clsx(
    BUTTON_CLASSES,
    disabled && 'pointer-events-none',
    BUTTON_SIZES[size],
    BUTTON_VARIANT[variant],
    ...rest
  );
};

const ButtonContent: React.FC<{
  loading?: boolean;
  size?: ButtonSize;
  children?: React.ReactNode;
}> = ({ loading, children }) => {
  return (
    <React.Fragment>
      {loading && (
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Spinner />
        </span>
      )}
      <span className={clsx({ invisible: loading })}>{children}</span>
    </React.Fragment>
  );
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & HTMLButtonProps
>((props, ref) => {
  const { className = ' ', disabled, size, variant, ...rest } = props;
  return (
    <button
      className={getButtonClasses({ disabled, size, variant }, className)}
      ref={ref}
      type="button"
      aria-disabled={disabled}
      {...rest}
    >
      <ButtonContent {...props} />
    </button>
  );
});

Button.displayName = 'Button';
