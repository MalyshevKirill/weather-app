import ISettlement from './ISettlement';
import IWeather from './IWeather';

interface ICurrentWeatherResponse {
    location: ISettlement,
    current: IWeather
}

export default ICurrentWeatherResponse