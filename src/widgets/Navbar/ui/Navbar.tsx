import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('Home Page')}</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={t('about')}>{t('About Page')}</AppLink>
    </div>
  );
};
