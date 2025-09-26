import React, { useState } from "react";
import "./styles.css";

function App(){

const [name, setName] = useState("");
const [greeting, setGreeting] = useState("");

return (
    <div>

<input type = "text" onChange={ (e)  => setName(e.target.value)} />

<button onClick= { () => setGreeting(name)} > Selamla </button>

<p> {greeting && `Merhaba, ${greeting}!`} </p>

</div>

);
}

export default App;
