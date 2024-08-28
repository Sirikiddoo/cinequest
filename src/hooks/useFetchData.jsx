import {useState, useEffect} from 'react';

/* Fetching popular movie data */
const useFetchData = (apiFunc, params = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await apiFunc({...params, signal});
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [apiFunc, JSON.stringify(params)]);

    return {data, isLoading, error};
};

export default useFetchData;
