import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { HomePageAsync } from "./pages/HomePage/HomePage.async";
import { Suspense } from "react";
import { Loading } from "./components/Loading/Loading";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Home Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<AboutPageAsync />} />
          <Route path="/about" element={<HomePageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
