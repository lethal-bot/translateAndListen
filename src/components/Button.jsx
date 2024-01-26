export default function Button({ className, value, type, img }) {
  return (
    <button className={className} type={type}>
      {img && <img className="play" src={img} alt="play" />}
      {value}
    </button>
  );
}
