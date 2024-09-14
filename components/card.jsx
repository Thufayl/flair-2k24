export default function Card({ img, description }) {
  return (
    <div className="max-w-7xl rounded overflow-hidden shadow-lg">
      <div className="cursor-pointer h-xl hover: w-md ease-in">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Card"
        />
      </div>
      <div className="p-4 bg-blue-400">
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
}