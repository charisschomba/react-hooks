export const initialState =  {
    loading: false,
    count: 0,
};

export const reducer = (state, action) => {
    switch(action.type){

        case 'loading' : {
            return {...state, loading: true };
        }

        case 'increment': {
            return {...state, count: state.count + 1, loading: false};

        }

        case 'decrement':{
            return{ ...state, count:state.count - 1, loading: false};
        }

        default: {
            return state;
        }
    }
};
