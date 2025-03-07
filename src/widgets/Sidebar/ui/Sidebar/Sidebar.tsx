import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggleCollapse} type="button">Toggle</button>
      <LangSwitcher />
    </div>
  );
};
