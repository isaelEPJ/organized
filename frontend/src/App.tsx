import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/globalStyles';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <GlobalStyles />
        </>
    );
}

export default App;
