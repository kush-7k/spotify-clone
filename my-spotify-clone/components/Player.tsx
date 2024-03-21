import React from 'react';

const Player: React.FC = () => {
  // Mock data for currently playing track
  const currentTrack = {
    title: "Example Track",
    artist: "Example Artist",
    duration: "3:45", // Example duration
    albumCover: "/images/album-cover.jpg" // Example image path
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={currentTrack.albumCover} alt={currentTrack.title} className="w-12 h-12 rounded-md mr-4" />
          <div>
            <p className="font-semibold">{currentTrack.title}</p>
            <p className="text-sm">{currentTrack.artist}</p>
          </div>
        </div>
        <div>
            <button className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 4v12h3V4H5zm7 0v12h3V4h-3z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-white hover:text-gray-300 focus:outline-none ml-4">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536-3.535a3 3 0 10-4.243 4.243l3.535 3.536A8 8 0 1110 2zm0 4a4 4 0 110 8 4 4 0 010-8z" clipRule="evenodd" />
            </svg>
          </button>
            </div>
        <p className="text-sm">{currentTrack.duration}</p>
      </div>
    </div>
  );
};

export default Player;
