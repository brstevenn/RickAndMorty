import { useEffect, useState } from 'react';

function Storage() {
  const [data, setData] = useState([]);

  /*useEffect(() => {
    // Cargar desde localStorage
    const storedData = JSON.parse(localStorage.getItem("myData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);
*/
  useEffect(() => {
    // Guardar en localStorage
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  return (
    <></>
  );
}

export default Storage;
