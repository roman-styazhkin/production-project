import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <AppLink to="/">HomePage</AppLink>
            <AppLink to="/about">AboutPage</AppLink>
        </nav>
    );
};
