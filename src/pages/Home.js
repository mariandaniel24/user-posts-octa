import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`it's working`);
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Home</h1>
      <p style={{ textAlign: "center" }}>Count is: {count}</p>

      <button onClick={handleIncrement}>Increment counter</button>
    </div>
  );
};

export default Home;
