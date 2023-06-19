import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const value="";

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
        <div className="start">
            <h1>Game for Mangoes</h1>
            <h1>eating</h1>
            <h1>invitation</h1>
        </div>
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
        
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
