import { classNames } from 'shared/lib/classNames';
import { Button, VariantButton } from 'shared/ui/Button/Button';
import { FC } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  onClick?: () => void;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      variant={VariantButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
