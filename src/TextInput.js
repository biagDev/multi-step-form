export default function TextInput({ stage }) {
  return (
    <input type='text' placeholder={stage === 1 ? "What's your email?" : ''} />
  );
}
