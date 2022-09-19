import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';
export default function LeftContainer({ stage, setStage }) {
  function nextStage() {
    setStage(stage + 1);
  }

  if (stage === 2) {
    return (
      <div className='left-container'>
        <div className='inner-left-container'>
          <h2>What's your budget?</h2>
          <ButtonGroup />
          <button onClick={nextStage}>Next</button>
        </div>
      </div>
    );
  }

  if (stage === 3) {
    return (
      <div className='left-container'>
        <div className='inner-left-container'>
          <h2>Anything else we should know?</h2>
          <TextInput stage={stage} />
          <button onClick={nextStage}>Next</button>
        </div>
      </div>
    );
  }

  if (stage === 4) {
    return (
      <div className='left-container'>
        <div className='inner-left-container'>
          <h2>Thank you!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='left-container'>
      <div className='inner-left-container'>
        <h2>Apply to work with our agency</h2>
        <TextInput stage={stage} />
        <button onClick={nextStage}>Next</button>
      </div>
    </div>
  );
}
