import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonThemes {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    buttonTheme?: ButtonThemes;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    buttonTheme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[buttonTheme]])}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
