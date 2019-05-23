import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document
    .getElementById('inc')
    .addEventListener('click', inc);
document
    .getElementById('dec')
    .addEventListener('click', dec);
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*10);
        rnd(payload);
    });

const update = () => {
    document
        .getElementById('counter')
        .textContent = store.getState();
};

store.subscribe(update);


// store.subscribe(() => {
//     console.log(store.getState());
// });
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});



// let state = reducer(undefined, {});
// state = reducer(state, { type: 'INC' });
// console.log(state);
// state = reducer(state, { type: 'INC' });
// console.log(state);