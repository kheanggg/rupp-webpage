export default function PhotoCard({ image, title }) {
  return (
    <div>
      <img className="w-[400px] h-[200px]" src={image} alt={title} />
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}