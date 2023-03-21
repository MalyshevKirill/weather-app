import {FC, useCallback, useMemo} from 'react';
import {AutoComplete, Spin} from 'antd';
import useDebouncedState from '../../hooks/useDebouncedState';
import {useGetSettlementsQuery} from '../../services/settlementsApi';
import {useNavigate} from 'react-router-dom'
import IShortGeolocation from '../../models/IShortGeolocation';

const CountrySearch: FC = () => {
    const [value, setValue, debouncedValue] = useDebouncedState('', 700)
    const navigate = useNavigate()

    const isReadyToFetch = useMemo(
        () => debouncedValue.length > 2,
        [debouncedValue]
    )

    const {data: options, error, isLoading} = useGetSettlementsQuery(
        debouncedValue,
        {skip: !isReadyToFetch}
    )

    const handleSelect = useCallback((_: string, {lat, lon}: IShortGeolocation) => {
        navigate({
            pathname: '/weather',
            search: `lat=${lat}&lon=${lon}`
        })
        setValue('')
    }, [navigate, setValue])

    return <AutoComplete
        style={{width: '400px'}}
        onSearch={data => setValue(data)}
        value={value}
        placeholder='Enter a settlement'
        notFoundContent={isReadyToFetch && 'No results'}
        status={error && 'error'}
        onSelect={handleSelect}
    >
        {isLoading && <AutoComplete.Option><Spin/></AutoComplete.Option>}
        {isReadyToFetch && options?.map(({name, region, country, lat, lon}, key) =>
            <AutoComplete.Option {...{lat, lon, key}}>
                {name}, {region && `${region},`} {country}
            </AutoComplete.Option>
        )}
    </AutoComplete>
}

export default CountrySearch