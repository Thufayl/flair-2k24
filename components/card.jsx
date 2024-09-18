export default function Card({ img, videoSrc, description, isCenter }) {
  return (
    <div
      className={`max-w-7xl h-7xl rounded overflow-hidden shadow-lg transition-all duration-300 ${
        isCenter ? 'scale-110 shadow-2xl' : 'scale-100 shadow-lg'
      }`}
    >
      <div className="cursor-pointer">
        {isCenter ? (
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="Card"
          />
        )}
      </div>
      <div
        className={`p-4 transition-all duration-300 shadow-sm ${
          isCenter ? 'bg-secondary' : 'bg-blue-400'
        }`}
      >
        <p
          className={`text-base text-center transition-all duration-300 ${
            isCenter ? 'text-white text-lg font-bold font-sans' : 'text-gray-200'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
