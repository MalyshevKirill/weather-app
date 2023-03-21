interface ICondition {
    text: string,
    icon: string,
    code: number
}

interface IWeather {
    last_updated_epoch: number,
    last_updated: string,
    temp_c: number,
    is_day: number,
    condition: ICondition,
    wind_kph: number,
    wind_dir: string,
    pressure_mb: number,
    precip_mm: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    vis_km: number,
    uv: number,
    gust_kph: number
}

export default IWeather