import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
          <li>
            <Link href="/player">
              <a>Player</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/playlists">
              <a>Playlists</a>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
