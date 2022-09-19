import { useState } from 'react';
import './App.css';
import LeftContainer from './LeftContainer';
import RightImage from './RightImage';

function App() {
  const [stage, setStage] = useState(1);
  return (
    <div className='App'>
      <LeftContainer stage={stage} setStage={setStage} />
      <RightImage stage={stage} />
    </div>
  );
}

export default App;
