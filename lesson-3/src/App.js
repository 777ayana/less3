import React, { useState } from 'react';

const App = () => {
  
   const[count, setCount] = useState(0)
   //const[name, setName] = useState('None')
  //const [color,setSelector] = useState()
  const [theme, setTheme] = useState(false)



   const changeColor = (event) => {
     setName(e.target.innerHTML);
   }

  // const changeColor = (e) => {
  //   setColor(e.target.innerHTML)

  // }
  // const rename = (event) => {
  //  setName (event.target.innerHTML)
  // }
  return (
    <div>
          {/* <button ></button> */}
{/*       
      <h1>{name}</h1>
      <button onClick={rename}>Azema</button>
      <button onClick={rename}>Talgat</button>
      <button onClick={rename}>Iskhak</button>
      <button onClick={rename}>Arishem</button>
      <button onClick={rename}>Aika</button>
      <button onClick={rename} >Ayana</button>
      <button onClick={rename} >Oma</button>
      <button onClick={rename} >Janyl</button>
      <button onClick={rename}>Aityrgan</button>  */}

{/*       
<button onClick={changeColor}>Red</button>
      <button onClick={changeColor}>black</button>
      <button onClick={changeColor}>Blue</button>


      <div style={{
      width: 200,
      height: 200,
      background: 'pink' 
    }}></div> */}
    <button onClick={() => setTheme(!theme)}>Change theme </button>

<div style={{
      width: 200,
      height: 200,
      background: theme ? 'black' : 'yellow'
    }}></div>
    </div>
  );
};

export default App;



