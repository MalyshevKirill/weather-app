import {FC, useMemo} from 'react';
import Container from '../../components/Container';
import {Layout, Row, Col} from 'antd';
import {useSearchParams} from 'react-router-dom';
import CurrentWeather from '../../components/CurrentWeather';
import IShortGeolocation from '../../models/IShortGeolocation';

const Weather: FC = () => {
    const [searchParams] = useSearchParams()
    const geolocation = useMemo((): IShortGeolocation => {
        return {
            lat: searchParams.get('lat') || '',
            lon: searchParams.get('lon') || ''
        }
    }, [searchParams])

    console.log(geolocation)

    return <Container>
        <Layout.Content style={{marginTop: '16px'}}>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <CurrentWeather
                        {...geolocation}
                    />
                </Col>
                <Col span={16}>
                    Col
                </Col>
            </Row>
        </Layout.Content>
    </Container>
}

export default Weather