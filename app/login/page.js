import PhotoCard from "@component/PhotoCard";

export default function Home() {
  return (
    <>
      <div className="flex gap-5">
        <PhotoCard title="Car 1" image="/car_1.jpg" />
        <PhotoCard title="Car 2" image="/car_2.jpg" />
      </div>
      <a type="button" href="/">
        Click here to abc/
      </a>
    </>
  );
}
