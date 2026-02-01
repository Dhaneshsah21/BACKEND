import { useRef } from "react";

function Count() {
  const countRef = useRef(0);
  const displayRef = useRef(null);

  const handleClick = () => {
    countRef.current += 1;             
    displayRef.current.innerText = countRef.current; 
  };

  return (
    <div>
      <h2 ref={displayRef}>0</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default Count;
