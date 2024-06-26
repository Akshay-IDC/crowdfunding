import react from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { BinanceTestnet } from "@thirdweb-dev/chains";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
    <ThirdwebProvider activeChain={ChainId.BinanceSmartChainTestnet} >
        <Router>
            <StateContextProvider>
                <App/>
            </StateContextProvider> 
        </Router>
    </ThirdwebProvider>
)