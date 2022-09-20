import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';

const LABEL_TEXT = [
  'Apply to work with our agency',
  "What's your budget?",
  'Anything else we should know?',
  'Thank you!',
];

export default function LeftContainer({ stage, setStage }) {
  let content;
  if (stage === 0) {
    content = <TextInput stage={stage} />;
  } else if (stage === 1) {
    content = <ButtonGroup />;
  } else if (stage === 2) {
    content = <TextInput stage={stage} />;
  } else {
    content = null;
  }

  return (
    <div className='left-container'>
      <div className='inner-left-container'>
        <h2>{LABEL_TEXT[stage]}</h2>
        {content}
        {stage !== 3 && (
          <button onClick={() => setStage(stage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

// if (stage === 2) {
//   return (
//     <div className='left-container'>
//       <div className='inner-left-container'>
//         <h2>What's your budget?</h2>
//         <ButtonGroup />
//         <button onClick={nextStage}>Next</button>
//       </div>
//     </div>
//   );
// }

// if (stage === 3) {
//   return (
//     <div className='left-container'>
//       <div className='inner-left-container'>
//         <h2>Anything else we should know?</h2>
//         <TextInput stage={stage} />
//         <button onClick={nextStage}>Next</button>
//       </div>
//     </div>
//   );
// }

// if (stage === 4) {
//   return (
//     <div className='left-container'>
//       <div className='inner-left-container'>
//         <h2>Thank you!</h2>
//       </div>
//     </div>
//   );
// }
