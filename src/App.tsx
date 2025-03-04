import {Suspense} from "react";
import {Link, Route, Routes} from "react-router";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import {useTheme} from "./theme/useTheme";
import "./styles/index.scss";
import {classNames} from "./helpers/classNames/classNames";
const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} type="button">Toggle</button>
            <div>
                <Link to="/">Home Page</Link>
                <Link to="/about">About Page</Link>
            </div>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync />} />
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;