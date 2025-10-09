import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10 gap-2 flex flex-col items-start">
      <h1 className="text-2xl font-bold text-gray-800">
        Test App
      </h1>
      <button className="bg-green-200 text-green-900 p-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
