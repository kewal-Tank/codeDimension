import { useEffect, useState } from 'react';

const PREFIX = 'codeDimension-';

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    // Retrieve the value from localStorage, or use the provided initialValue
    const storedValue = localStorage.getItem(prefixedKey);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // State variable to hold the current value
    const [value, setValue] = useState(initial);

    // Update localStorage when the value changes
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}
