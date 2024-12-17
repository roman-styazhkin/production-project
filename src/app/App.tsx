import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";


export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
};
