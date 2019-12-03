import React, {useState} from 'react';
import './list.css';

import useArray from '../hooks/useArray';

const List = (props) => {
  const { storeName } = props

  const shoppingList = useArray([
    {text: "eggs", id: Math.random()},
     {text: "milk", id: Math.random()},
     {text: "butter", id: Math.random()}
  ])

  return(
    <>
    <h3>{props}</h3>
      <ul className="List">
        <button onClick={() => shoppingList.add({ text: Math.random(), id: Math.random() })}>add</button>
        {shoppingList.array.map((item) => (
          //warning - if oyu are concerned with multi users and concurrency, use DB ID not index!!!!!
          <li key={item.id}>
            {item.text}
            {/* removeByIndex is method on our Hook. */}
            <button onClick={() => shoppingList.removeById(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button onClick={shoppingList.clear}>clear all items</button>
    </>
  );
}

export default List;