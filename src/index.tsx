import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from "./App";
import {ThemeContext} from "./theme/ThemeContext";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);