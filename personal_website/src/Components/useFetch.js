import { useEffect, useState } from "react";

/**
 * useFetch is a very important component as this will retrieve and load data upon 
 * entering a page. It will also set important booleans whether the page is empty, is pending (loading)
 * or an error has occurred. It was also vital that the useEffect hook used to build useFetch 
 * was dependent on the url being processed in so that the useEffect hook does not run infinitely
 * -- useEffect hook runs every frame.. we don't want that for this particular task.
 * 
 * @param {} url 
 * @returns 
 */
const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    const[isEmpty, setIsEmpty] = useState(false);
    
    useEffect( () => {
        fetch(url)
        .then(res => {
            console.log(res);
            if(!res.ok) {
                throw Error('could not fetch the data for the resource');
            }
            return res.json();
        })
        .then(data => {
            if (data && data.length <= 0) {
                setIsEmpty(true);
            }

            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    }, [url]);
    
    return {data, isPending, isEmpty, error}
}
 
export default useFetch;