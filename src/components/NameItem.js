import React, {useEffect} from 'react';

function NameItem({ name, activeName, setActiveName }) {

    useEffect((e) => {
        console.log(`${name} is in de DOM gezet`);
        }, [name])

    useEffect(() => {
        if (activeName === name) {
            console.log(`${name} wil graag een biertje bestellen`)
        }
    }, [activeName, name])

  return (
    <li>
      <h3>{name}</h3>
      <button
          type="button"
          onClick={() => setActiveName(name)}
      >
        Geef een rondje!
      </button>
    </li>

  );
}

export default NameItem;