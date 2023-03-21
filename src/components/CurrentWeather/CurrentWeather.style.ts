import styled from 'styled-components';
import {Breadcrumb} from 'antd';

export const CurrentWeatherBox = styled('div')<{isDay: boolean}>`
    background: ${props => props.isDay ? '#f2f27a' : '#001529'};
    color: ${props => props.isDay ? '#000' : '#fff'};
    padding: 10px;
    border-radius: 10px;
    box-shadow: #000 3px 3px 5px;
    height: 100%;
    width: 100%;
    min-width: 350px;
    font-size: 1rem;
    * {
        color: inherit !important;
    }
`

export const StyledBreadcrumb = styled(Breadcrumb)`
    font-size: inherit;
`

export const CurrentTemperature = styled('div')`
    color: inherit;
    font-size: 2rem;
    font-weight: 700;
`

export const WeatherIcon = styled('span')<{url: string}>`
    width: 54px;
    height: 54px;
    background: url(${props => props.url}) center center;
`

export const MainWeatherInfo = styled('div')`
    display: flex;
    gap: 5px;
    align-items: center;
`

export const AdditionalWeatherInfo = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`