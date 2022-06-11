import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div className="wrapper">
      <div className="number">{state.count}</div>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        click Here
      </button>
      {state.showText && <div className="text">Tada I'm Here</div>}
    </div>
  );
}

export default UseReducer;
