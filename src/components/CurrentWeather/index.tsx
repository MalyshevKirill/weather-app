import {FC, useMemo} from 'react';
import {useGetCurrentWeatherQuery} from '../../services/weatherApi';
import IShortGeolocation from '../../models/IShortGeolocation';
import {Breadcrumb, Skeleton, Typography} from 'antd';
import {
    CurrentWeatherBox,
    CurrentTemperature,
    StyledBreadcrumb,
    MainWeatherInfo,
    WeatherIcon,
    AdditionalWeatherInfo,
} from './CurrentWeather.style';
import IconData, {IconDataProps} from '../IconData';
import {FiWind, FiDroplet, FiCompass, FiMinimize, FiCloud, FiCrosshair, FiDivide, FiSlack} from 'react-icons/fi'

const CurrentWeather: FC<IShortGeolocation> = ({lat, lon}) => {
    const {data: weather, isLoading} = useGetCurrentWeatherQuery(
        `${lat} ${lon}`
    )

    const additionalInfo: IconDataProps[] | [] = useMemo(() => {
        if(!weather) return []
        return [
            {
                Icon: () => <FiWind/>,
                data: weather.current.wind_kph,
                tooltipText: 'Wind(k/h)'
            },
            {
                Icon: () => <FiCompass/>,
                data: weather.current.wind_dir,
                tooltipText: 'Wind direction'
            },
            {
                Icon: () => <FiMinimize/>,
                data: weather.current.pressure_mb,
                tooltipText: 'Pressure(mb)'
            },
            {
                Icon: () => <FiDroplet/>,
                data: weather.current.precip_mm,
                tooltipText: 'Precipitation(mb)'
            },
            {
                Icon: () => <FiDroplet/>,
                data: weather.current.humidity,
                tooltipText: 'Humidity(%)'
            },
            {
                Icon: () => <FiCloud/>,
                data: weather.current.cloud,
                tooltipText: 'Cloud(%)'
            },
            {
                Icon: () => <FiCrosshair/>,
                data: weather.current.vis_km,
                tooltipText: 'Visibility(km)'
            },
            {
                Icon: () => <FiDivide/>,
                data: weather.current.uv,
                tooltipText: 'UV Index'
            },
            {
                Icon: () => <FiSlack/>,
                data: weather.current.gust_kph,
                tooltipText: 'Gust'
            },
        ]
    }, [weather])

    return <Skeleton loading={isLoading} active>
        {weather &&
            <CurrentWeatherBox isDay={weather.current.is_day === 1}>
                <StyledBreadcrumb separator='-'>
                    <Breadcrumb.Item>
                        {weather.location.country}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {weather.location.region}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {weather.location.name}
                    </Breadcrumb.Item>
                </StyledBreadcrumb>
                <Typography>
                    Last update: {weather.current.last_updated}
                </Typography>
                <MainWeatherInfo>
                    <CurrentTemperature>
                        {weather.current.temp_c} ℃
                    </CurrentTemperature>
                    <WeatherIcon
                        url={weather.current.condition.icon}
                    />
                    <div>
                        <div>{weather.current.condition.text}</div>
                        <div>Feels like {weather.current.feelslike_c} ℃</div>
                    </div>
                </MainWeatherInfo>
                <AdditionalWeatherInfo>
                    {additionalInfo.map(({Icon, data, tooltipText}, key) => (
                        <IconData {...{key, Icon, data, tooltipText}} />
                    ))}
                </AdditionalWeatherInfo>
            </CurrentWeatherBox>
        }
    </Skeleton>
};

export default CurrentWeather;