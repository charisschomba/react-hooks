import React, { useState, useEffect, Fragment} from 'react';
import { fetchData} from "./data";

const App = () => {
    const [data, setData] = useState({hits: []});
    const [query, setQuery] = useState('redux');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect( () => {
       fetchData(setData, query, setIsLoading, setError);
    }, [search]);

    return (

        <Fragment>
            <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
            />
            <button
                type="button"
                onClick={() => setSearch(query)}
            >Search</button>
            { isError && <div>Something went wrong ...</div> }
            {
                isLoading ? ( <div>Loading ...</div>) :
                    (<ul>
                    {data.hits.map(item =>(
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}

                </ul>)

            }

        </Fragment>
    )
};

export default App;
