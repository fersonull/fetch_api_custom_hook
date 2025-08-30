import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);

            const result = await response.json();

            console.log(result.data);

            setData(result.data);
        } catch (error) {
            console.error("fetching error: ", error);
        }
        };

        fetchData();
    }, []);

    return { data }

}
