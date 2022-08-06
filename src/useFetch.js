import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [Data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch the data');
            }
            return res.json()
            })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                setError(err.message)
                setIsPending(false)
              }           
        })
        return () => abortCont.abort();
        }, [url])
        return { Data, isPending, error }
}

export default useFetch;