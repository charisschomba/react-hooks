import axios from "axios";

export const fetchData =  async (updateState, query, loading, setError) => {
    loading(true);
    setError(false);
    try {
        const result =  await axios ( `http://hn.algolia.com/api/v1/search?query=${query}`,);
        updateState(result.data);
    }catch (error) {
        setError(true)
    }
    loading(false);
};