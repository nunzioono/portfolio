import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.js';
import Root from './routes/Root.js';
import reportWebVitals from './reportWebVitals';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Contacts from './routes/Contacts.js';
import Projects from './routes/Projects.js';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >

            <Route index element={<Home />}></Route>
            
            <Route path="/home" element={<Home />}></Route>

            <Route path="/contacts" element={<Contacts />}></Route>

            <Route path="/projects" element={<Projects />}></Route>
        
      </Route>
    )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
