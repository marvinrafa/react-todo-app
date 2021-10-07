import React from "react";

//Custom react hook
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  //Para sincronizar las ventanas
  const [isSynchronized, setIsSynchronized] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          //LOCAL storage solo guarda string
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        //Diciendo que ya estamos sincronizados
        setIsSynchronized(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSynchronized]);

  const saveItem = (newItem) => {
    try {
      const stringyfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringyfiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItem = () => {
    setLoading(true);
    setIsSynchronized(false);
  };
  return { item, saveItem, loading, error, synchronizeItem };
}

export default useLocalStorage;
