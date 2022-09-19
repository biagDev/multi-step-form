export default function RightImage({ stage }) {
  if (stage === 2) {
    return (
      <div className='right-image'>
        <img
          alt='agency man'
          src={'https://assets.codepen.io/6060109/form-stage-2.png'}
        />
      </div>
    );
  }
  if (stage === 3) {
    return (
      <div className='right-image'>
        <img
          alt='agency man'
          src={'https://assets.codepen.io/6060109/form-stage-3.png'}
        />
      </div>
    );
  }
  if (stage === 4) {
    return (
      <div className='right-image'>
        <img
          alt='agency man'
          src={'https://assets.codepen.io/6060109/form-stage-4.png'}
        />
      </div>
    );
  }
  return (
    <div className='right-image'>
      <img
        alt='agency women'
        src={'https://assets.codepen.io/6060109/form-stage-1.png'}
      />
    </div>
  );
}
