export default function Button({ className, value, type, img, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {img && <img className="play" src={img} alt="play" />}
      {value}
    </button>
  );
}
