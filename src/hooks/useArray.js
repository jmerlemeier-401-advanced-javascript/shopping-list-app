import { useState, useCallback } from 'react';

const useArray = (initialArray = []) => {
//array has state
  const [value, setValue] = useState(initialArray);

  return{
    value,
    setValue, 
    //takes function and list of triggers on which to 
    removeByIndex: useCallback(i => {
      const copy = arr.slice()
      //filter out the index
      copy.splice(i, 1)
      return copy
      })
    }, []), 
    removeById: useCallback(id => {
      setValue(arr => {
        return arr.filter(item => item.id !== id)
      })
    }, []),
    add: useCallback(v => setValue(() => [...arr, value]))
  }
}

export default useArray;