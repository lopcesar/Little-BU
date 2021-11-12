import React, {useState, useEffect} from 'react';



function App() {

  const [data, setData] = useState ();
  const url = "https://http://localhost:3030/"
  return (
    <div className="App">
      <button
        onClick={async () => {
          const click = await fetch(url, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
            method: "GET",
            body: JSON.stringify({
              id: 1,
              name: "",
             
            }),
          });
          const json = await click.json();
          console.log(click);
          console.log(json);
          setData(json.title);
        }}
      >
        Bienvenido
      </button>

      <div>{data}</div>
    </div>
  );
}

export default App;
