import React from 'react';

interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const handlePlayClick = () => {
    console.log(`Playing ${playlist.name}`);
    // Simulate playing the playlist by logging a message
    console.log(`${playlist.name} is now playing.`);
  };

  const handleAddToLibraryClick = () => {
    console.log(`Adding ${playlist.name} to library`);
    // Simulate adding the playlist to the library by logging a message
    console.log(`${playlist.name} added to library successfully!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={playlist.imageUrl} alt={playlist.name} className="w-full h-auto rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{playlist.name}</h3>
      <p className="text-gray-600">{playlist.description}</p>
      <div className="mt-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2" onClick={handlePlayClick}>
          Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md" onClick={handleAddToLibraryClick}>
          Add to Library
        </button>
      </div>
    </div>
  );
};

export default PlaylistCard;
