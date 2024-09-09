import {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce.tsx';

export const useSearch = (onChangeSearch) => {
    const [search, setSearch] = useState('');
    const debouncedValue = useDebounce(search, 1000);

    useEffect(() => {
        onChangeSearch(debouncedValue);
    }, [debouncedValue]);

    const onHandleSearch = (event) => {
        setSearch(event.target.value);
    };

    return{
        search,
        onHandleSearch
    }

};