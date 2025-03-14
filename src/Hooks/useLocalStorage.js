import { useState, useEffect } from "react"

const PREFIX = 'devpad';

function useLocalStorage(key, initialValue) {
    const prefixKey = PREFIX + key;

    const jsonValue = localStorage.getItem(prefixKey);
    const [value, setValue] = useState(() => {
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey, value])

    return [value, setValue]
}
export default useLocalStorage