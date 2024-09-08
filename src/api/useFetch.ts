import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsLoading(false);
                setData(json);
                setIsSuccess(true)
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, isError, isSuccess };
};