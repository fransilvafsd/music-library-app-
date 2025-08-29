import React from 'react';
import styles from './Playlists.module.css';

const Playlists = () => {
  const playlist = {
    name: 'My Favorite Songs',
    songs: [
      {
        id: 1,
        title: 'Utopia',
        artist: 'Travis Scott',
        album: 'Utopia',
        duration: '3:14',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png',
      },
      {
        id: 2,
        title: 'Starboy',
        artist: 'The Weeknd',
        album: 'Starboy',
        duration: '3:50',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png',
      },
      {
        id: 3,
        title: 'My Beautiful Dark Twisted Fantasy',
        artist: 'Kanye West',
        album: 'My Beautiful Dark Twisted Fantasy',
        duration: '4:56',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF.jpg',
      },
      {
        id: 4,
        title: 'Blonde',
        artist: 'Frank Ocean',
        album: 'Blonde',
        duration: '4:05',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg',
      },
      {
        id: 5,
        title: 'CTRL',
        artist: 'SZA',
        album: 'CTRL',
        duration: '3:30',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/SZA_-_Ctrl_cover.png',
      },
    ],
  };

  return (
    <div className={styles.playlists}>
      <h1 className={styles.sectionTitle}>{playlist.name}</h1>
      <div className={styles.listContainer}>
        {playlist.songs.map((song) => (
          <div key={song.id} className={styles.listItem}>
            <img src={song.image} alt={song.title} />
            <div className={styles.songInfo}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className={styles.albumInfo}>{song.album}</div>
            <div className={styles.duration}>{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
