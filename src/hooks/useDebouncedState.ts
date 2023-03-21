import {useState, useEffect, Dispatch} from 'react';

const useDebouncedState = <S>(
    initialState: S,
    delay: number = 700
): [S, Dispatch<S>, S] => {
    const [value, setValue] = useState<S>(initialState)
    const [debouncedValue, setDebouncedValue] = useState<S>(initialState)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])

    return [value, setValue, debouncedValue]
}

export default useDebouncedState