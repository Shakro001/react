

import React from 'react';
import List from './components/List/List'

import {animals} from './mockData'

export default function App() {
  return (
    <>
    <List list={animals}/>

    </>
  );
}