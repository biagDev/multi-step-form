import { useState } from 'react';

const SELECTED_STYLES = {
  backgroundColor: 'white',
  color: '#745e5e',
};

const BUTTON_TEXT = ['$2k', '$5k', 'No Limit'];

export default function ButtonGroup() {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <div className='button-group'>
      {BUTTON_TEXT.map((txt, i) => (
        <button
          style={selectedButton === i ? SELECTED_STYLES : null}
          onClick={() => setSelectedButton(i)}
        >
          {txt}
        </button>
      ))}
    </div>
  );
}
