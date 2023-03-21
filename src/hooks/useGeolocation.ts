import {useEffect, useState} from 'react';

const useGeolocation = (): [GeolocationCoordinates | undefined, string, boolean] => {
    const [geolocation, setGeolocation] = useState<GeolocationCoordinates>()
    const [error, setError] = useState<string>('')
    const [isPending, setIsPending] = useState<boolean>(true)

    useEffect(() => {
        setIsPending(true)
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setGeolocation(position.coords)
                    setIsPending(false)
                },
                () => {
                    setError('No access to geolocation')
                    setIsPending(false)
                }
            )
        } else {
            setError('Geolocation not supported')
            setIsPending(false)
        }
    }, [])

    return [geolocation, error, isPending]
}

export default useGeolocation