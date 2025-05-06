import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-100 text-gray-900',
    outline: 'border border-gray-300 bg-transparent text-gray-700',
    ghost: 'bg-transparent text-gray-700'
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-2 rounded',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-md'
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button