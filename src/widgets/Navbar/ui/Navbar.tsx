import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {AppLink} from "shared/ui/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />

            <div className={cls.navbarList}>
                <AppLink to="/">HomePage</AppLink>
                <AppLink to="/about">AboutPage</AppLink>
            </div>
        </nav>
    );
};
