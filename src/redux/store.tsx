import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Redux store
const store = createStore(rootReducer);
export default store;