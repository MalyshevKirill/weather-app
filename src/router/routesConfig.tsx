import {Navigate} from 'react-router-dom';
import { RouteObject } from "react-router-dom";
import Main from '../pages/Main';
import Index from '../pages/Weather';

const routesConfig: RouteObject[] = [
    {
        path: '/weather',
        element: <Index />
    },
    {
        path: '/',
        element: <Main />
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]

export default routesConfig