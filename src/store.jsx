// import  { createStore } from "redux";
import { createStore } from '@reduxjs/toolkit';
import rootreducers from './redex/reducers/main';

const store = createStore(rootreducers)

export default store
