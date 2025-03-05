import {Link} from "react-router";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
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
            <AppRouter />
        </div>
    );
};

export default App;