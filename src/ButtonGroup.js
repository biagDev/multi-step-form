import { useState } from 'react';

export default function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <div className='button-group'>
      <button
        style={
          selectedButton === 1
            ? { backgroundColor: 'white', color: '#745e5e' }
            : null
        }
        onClick={() => setSelectedButton(1)}
      >
        $2k
      </button>
      <button
        style={
          selectedButton === 2
            ? { backgroundColor: 'white', color: '#745e5e' }
            : null
        }
        onClick={() => setSelectedButton(2)}
      >
        $5k
      </button>
      <button
        style={
          selectedButton === 3
            ? { backgroundColor: 'white', color: '#745e5e' }
            : null
        }
        onClick={() => setSelectedButton(3)}
      >
        No limit
      </button>
    </div>
  );
}
