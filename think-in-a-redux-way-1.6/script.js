// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifires 
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator 
const increment = (value) => {
    return {
        // type: "increment",
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        // type: "decrement",
        type: DECREMENT,
        payload: value,
        }
}


//11 initial state
const initialState = {
    value: 0,
};

//22 create reducer function hurt of the redux
function counterReducer(state = initialState, action) {
    // if (action.type === "increment") {
    if (action.type === INCREMENT) {
        return {
            ...state,
            // value: state.value + 1,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            // value: state.value - 1,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    // store.dispatch({
    //     type: 'increment'
    // })
    
    // store.dispatch({
    //     type: 'increment',
    //     payload: 5
    // })
    store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});
