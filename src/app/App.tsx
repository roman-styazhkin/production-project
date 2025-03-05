import {Suspense} from "react";
import {Link, Route, Routes} from "react-router";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss";

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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;