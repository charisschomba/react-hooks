import React, { useReducer } from 'react';
import { initialState, reducer} from "./reducer";
import { delay} from "./helper";

const App = () => {

       const [{count, loading}, dispatch] = useReducer(reducer, initialState);

       const onHandleIncrement = async () => {
           dispatch({type: 'loading'});
           await delay(500);
           dispatch({type: 'increment'});
       };

        const onHandleDecrement = async () => {
            dispatch({ type: 'loading' });
            await delay(500);
            dispatch({ type: 'decrement' });
    };

    return (
        <div>
            <p>Count {loading ? 'loading..' : count}</p>
            <button type="button" onClick={onHandleIncrement}>
                +
            </button>
            <button type="button" onClick={onHandleDecrement}>
                -
            </button>
        </div>
    );
   };

export default App;
