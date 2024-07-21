export default function Situ(props) {
  return (
    <div
      className={`absolute text-white py-1 top-[10px] px-6 rounded-r-[50px] ${props.color}`}
    >
      <p>{props.text}</p>
    </div>
  );
}
