import { useState, useEffect } from "react";

export function useQuery(url)
{
    // state variable for holding fetched json data
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(undefined);

    useEffect(() =>
    {
        if (url)
        {
            let ignore = false;
            fetch(url).then(response => response.json()).then(json =>
            {
                if (!ignore)
                {
                    setData(json);
                }
            });
            // cleanup function, in case url changes before complete
            return () =>
            {
                ignore = true;
            };
        }
    }, [url]); // re-run effect if url changes
    // return the data fetched from the given url
    return [data, isLoading];
}
    
export default useQuery;
    // save as useData.jsx in the 'hooks' folder