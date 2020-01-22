import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Routes from "./home/Routes";
import {Provider} from "react-redux";
import store from "./BLL/store";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                    <Routes/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
