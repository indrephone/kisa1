import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './contexts/UsersContext';
import { ProductsProvider } from './contexts/ProductsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <ProductsProvider>
    <UsersProvider>
       <BrowserRouter>
        <App />
        </BrowserRouter>
     </UsersProvider> 
   </ProductsProvider>
);
