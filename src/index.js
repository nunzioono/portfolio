import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Root from './routes/Root';
import reportWebVitals from './reportWebVitals';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} >

            <Route index element={<Home />}></Route>
        
            <Route path="/contacts"></Route>
        
            <Route path="/projects"></Route>
        
        </Route>
    )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
