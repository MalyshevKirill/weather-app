import './App.css';
import 'antd/dist/antd.min.css';
import AppHeader from './components/AppHeader';
import {useRoutes} from 'react-router-dom';
import routesConfig from './router/routesConfig';
import {FC} from 'react'

const App: FC = () => {
    const routes = useRoutes(routesConfig)

    return <>
        <AppHeader/>
        {routes}
    </>
}

export default App;
