import {FC} from 'react';
import {Navigate} from 'react-router-dom';
import useGeolocation from '../../hooks/useGeolocation';
import {WarningMessageContainer} from './Main.styles.ts';
import {Spin, Typography} from 'antd';

const Main: FC  = () => {
    const [geolocation, error, isPending] = useGeolocation()

    if (isPending) {
        return <WarningMessageContainer>
            <Spin />
        </WarningMessageContainer>
    }

    if (error) {
        return <WarningMessageContainer>
            <Typography.Title level={2}>
                Give us access to geolocation or use the search
            </Typography.Title>
        </WarningMessageContainer>
    }

    return <Navigate to={{
        pathname: '/weather',
        search: `lat=${geolocation?.latitude.toFixed(2)}` +
            `&lon=${geolocation?.longitude.toFixed(2)}`
    }} />
}

export default Main