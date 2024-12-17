import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])} >
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>Home Page</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>About Page</AppLink>
    </div>
  );
};
