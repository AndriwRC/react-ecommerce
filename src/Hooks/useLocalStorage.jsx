import { useEffect, useState } from 'react';

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);

  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);

    if (localStorageItem) {
      setItem(JSON.parse(localStorageItem));
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
  }, []);

  return {
    item,
    saveItem,
  };
};
