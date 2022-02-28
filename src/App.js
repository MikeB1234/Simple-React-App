import React, { useState } from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <>
      <h1>Hello, current emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    </>
  )
}

export default App;
