import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "app/providers/router/ui/AppRouter";
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Home Page</Link>
      <Link to={'/about'}>About Page</Link>
      <AppRouter />
    </div>
  );
};
