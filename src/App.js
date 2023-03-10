import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.scss";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
