import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t, i18n } = useTranslation();

  function onToggleCollapse() {
    setCollapsed((prev) => !prev);
  }

  function toggleTranslate() {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggleCollapse} type="button">Toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher onClick={toggleTranslate}>
          {t('Язык')}
        </LangSwitcher>
      </div>
    </div>
  );
};
